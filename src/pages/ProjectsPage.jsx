import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext'; // Included for potential future use
import useImageHover from '../hooks/useImageHover';

const ProjectsPage = () => {
  // const { t } = useLanguage(); // Not used yet, but available

  const projectsData = [
    {
      title: "🏝️ Island Generation and Raycasting 🏝️",
      githubLink: "https://github.com/JudasBricot/2D-RayTracing-Island",
      imageSrc: "/img/project-isld-thumbnail-400.jpg",
      descriptionParas: [
        "In this project, I used Unity to develop a simple Island generator. The islands are generated using my own implementation of the Perlin noise algorithm, combined with a falloff technique that ensures the border of the map is always water.",
        "Additionally, I implemented a raytracing effect on the CPU, which applies shadows to all the pixels on the map, enhancing the visual realism of the generated islands."
      ]
    },
    {
      title: "🌊 Simulating Ocean 🌊",
      githubLink: "https://github.com/JudasBricot/Simple-Game-Engine/tree/fft-ocean",
      imageSrc: "/img/project-wvs-thumbnail-400.png",
      descriptionParas: [
        "This project is an implementation and improvement of J. Tessendorf's paper 'Simulating Ocean'. It is built upon a simple 2D OpenGL engine that I implemented following TheCherno tutorials. I added some elements to be able to render in 3D.",
        "The goal was to simulate the height of a 'part' of the ocean, which means that there is no advanced water rendering, only a flat plastic shader. The height generation is done by generating a spectrum and applying a 2D Inverse Fourier Transform. This is all done on the GPU using Compute Shaders for obvious performance reasons."
      ]
    },
    {
      title: "🫗 GlassOverflow",
      githubLink: "https://github.com/Skyepulse/FluidSimulatorGame/tree/x64-release-files",
      imageSrc: "/img/project-gls-0.png",
      descriptionParas: [
        "This is a school group project that features 2D real-time fluid simulation. I was in charge of designing and implementing the 2D engine.",
        "Additionally, I added a rendering pass for the game that takes the positions of the water particles and generates pixel art-styled visuals. This entire process is exclusively done on the GPU using Compute Shaders."
      ]
    }
  ];

  return (
    <div className="box-container">
      {projectsData.map((project, index) => {
        const imageRef = useRef(null);
        useImageHover(imageRef);

        return (
          <div className="box" key={index}>
            <div className="text-hover-zoom">
              <h2>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h2>
            </div>
            <div className="image-container">
              <img ref={imageRef} src={project.imageSrc} alt={`${project.title} thumbnail`} />
            </div>
            {project.descriptionParas.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
};
