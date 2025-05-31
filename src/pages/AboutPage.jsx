import React, { useState } from 'react';
// useLanguage import removed

const AboutPage = () => {
  // useLanguage() call removed
  const [openCourses, setOpenCourses] = useState({});

  // Placeholder Data (original structure maintained for now)
  const introTextKey = 'about.introduction';

  const skillLevel = {
    beginner: "beginner",
    intermediate: "intermediate",
    advanced: "advanced",
    expert: "expert"
  };

  const skillsData = [
    { id: 'skill1', name: 'C++', level: 80, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill2', name: 'Vulkan', level: 70, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill3', name: 'OpenGL', level: 80, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill4', name: 'C#', level: 75, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill5', name: 'Unity', level: 85, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill6', name: 'Python', level: 80, levelDescriptionKey: skillLevel.advanced },
    { id: 'skill7', name: 'C', level: 65, levelDescriptionKey: skillLevel.intermediate },
    { id: 'skill8', name: 'Java', level: 60, levelDescriptionKey: skillLevel.intermediate },
    { id: 'skill9', name: 'React', level: 35, levelDescriptionKey: skillLevel.beginner },
    { id: 'skill10', name: 'CSS', level: 35, levelDescriptionKey: skillLevel.beginner },
    { id: 'skill11', name: 'bash', level: 35, levelDescriptionKey: skillLevel.beginner },
  ];

  const educationData = [
    { id: 'edu3', 
      degreeKey: 'Master of Science in Software Engineering', 
      institutionKey: 'National University of Singapore', 
      period: '2024 - 2025', 
      courses: [
        {courseName : "CS4350: Game Development Project", link: "https://nusmods.com/courses/CS4350/game-development-project", desc: "Group project based course aiming at building a game."},
        {courseName : "CS5242: Neural Networks and Deep Learning", link: "https://nusmods.com/courses/CS5242/neural-networks-and-deep-learning", desc: "This course teaches the knowledge about practical Deep Learning networks through multiple assignments (CNN, VAE, VQ-VAE, FlashAttention implementation) and a final project."},
        {courseName : "CS5477: 3D Computer Vision", link: "https://nusmods.com/courses/CS5477/3-d-computer-vision", desc: "This heavily math-based course teaches everything needed for computer vision. From projective geometry to essential algorithms like RANSSAC, including modern techniques for view synthesis like NeRF and 3D Gaussian Splatting."},
        {courseName : "CS6240: Multimedia analysis", link: "https://nusmods.com/courses/CS6240/multimedia-analysis", desc: "PhD course aiming at showing current state of the art on MLLMs and their uses. Discussions included hallucination, measuring model performance, multimedia knowledge extraction,..."},
        {courseName : "CS6101: Exploration of Computer Science Research", link: "https://nusmods.com/courses/CS6101/exploration-of-computer-science-research", desc: "Course aiming at showing different research area in computer science research. I worked with a research group working on improving current systems (GPU clusters, CUDA kernels, existing libraries like PyTorch) to enable faster AI model training and inference."},
      ]
    },
    { id: 'edu2', degreeKey: 'Engineering Diploma in Computer Science', institutionKey: 'Telecom Paris', period: '2022 - 2025', descriptionKeys: ['about.education.degree2.desc1'] },
    { id: 'edu1', degreeKey: 'Preparatory Classes MPSI/MP*', institutionKey: 'Lycée Kléber, Strasbourg"', period: '2020 - 2022', descriptionKeys: [] },
  ];

  const experienceData = [
    { id: 'exp1', roleKey: 'about.experience.role1.name', companyKey: 'about.experience.role1.company', period: 'Summer 2023', responsibilityKeys: ['about.experience.role1.resp1', 'about.experience.role1.resp2'] },
  ];

  const cvPaths = {
    en: '/pdf/cv_arthur_wuhrlin_en.pdf',
    fr: '/pdf/cv_arthur_wuhrlin_fr.pdf'
  };

  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-section">
        <h2>About me</h2>
        <div className="introduction-text">
          <p>Hello! I'm Arthur, a <strong>master's computer science student</strong>. I'm curious about so many things ranging from <strong>arts to hard science</strong>, and of course, everything linked to <strong>computer science</strong>.My motivation is all about <strong>understanding deeply new concepts</strong>, and it's even better if I can do so with some <em>hand-on projects</em> ! I'm one of those that <em>learn by doing</em>.</p>
          <p>Here is a small and non-exhaustive list of what I'm interested in :</p>
          <ul>
            <li><strong>Hybrid rendering</strong> using Raytracing and ML based Denoisers : it was my <em>original Master's thesis project</em>.</li>
            <li>How do we do <strong>PBR</strong> ? : I read some extracts of the well-known PBRT book to get a rough understanding of what is different from real-time techniques.</li>
            <li><strong>Procedural generation</strong> : I am huge fan of terrain generation using techniques like <em>Perlin or Simplex Noise</em>.</li>
            <li>How does the <strong>graphics pipeline</strong> work ? : I started reading the wonderful <em>'A trip through the Graphics Pipeline 2011'</em> blog posts from ryg.</li>
            <li>How does a basic <strong>CPU</strong> work ? : I followed a course at Telecom Paris to understand the architecture of the <em>RISC-V</em>, and design a simple cpu.</li>
            <li>How do <strong>GPUs</strong> work ? : I read several articles on that, but need to dig deeper to understand the batch scheduling process, and how memory accesses are handled.</li>
            <li>How does a <strong>Game Engine</strong> work ? : I wrote my own Game Engine in <em>OpenGL and C++ for the GlassOverflow project</em>.</li>
            <li>...</li>
          </ul>
          <p>This list points out that, in computer science, my sweet spot lies on <strong>rendering techniques</strong> and <strong>low-level programming</strong>. I'm especially excited whenever it comes to <strong>programming using GPUs</strong>.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-item">
              <h3>{skill.name}</h3>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${skill.level}%` }}>
                </div>
              </div>
              <p className="skill-level-description">{skill.levelDescriptionKey}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="about-section">
        <h2>Education</h2>
        <div className="education-container">
          {educationData.map(edu => (
            <div key={edu.id} className="cv-item">
              <div className="cv-item-header">
                <div className="cv-item-main-info">
                  <h3>{edu.degreeKey}</h3>
                  <p className="institution">{edu.institutionKey}</p>
                </div>
                <div className="cv-item-period">
                  <p>{edu.period}</p>
                </div>
              </div>

              {/* Toggle Button */}
              {edu.courses && edu.courses.length > 0 && (
                <button
                  onClick={() => {
                    setOpenCourses(prev => ({ ...prev, [edu.id]: !prev[edu.id] }));
                  }}
                  className="toggle-courses-btn with-border"
                  style={{ marginBottom: '10px', padding: '5px 10px', fontSize: '0.9em' }}
                >
                  {openCourses[edu.id] ? 'Hide Courses' : 'Show Courses'}
                </button>
              )}

              {/* Conditionally Rendered Course List */}
              {openCourses[edu.id] && edu.courses && edu.courses.length > 0 && (
                <div className="courses-list">
                  <h4 className='align-left'>Courses:</h4>
                  <ul>
                    {edu.courses.map(course => (
                      <li key={course.courseName} className="course-item">
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          {course.courseName}
                        </a>
                        <p className="course-desc">{course.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Render description if present */}
              {edu.descriptionKeys && edu.descriptionKeys.length > 0 && (
                edu.descriptionKeys.map(descKey => <p key={descKey}>{descKey}</p>)
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="about-section">
        <h2>Experience</h2>
        <div className="experience-container">
          {experienceData.map(exp => (
            <div key={exp.id} className="cv-item">
              <h3>{exp.roleKey}</h3>
              <p><em>{exp.companyKey}</em> | {exp.period}</p>
              {exp.responsibilityKeys && exp.responsibilityKeys.length > 0 && (
                  // Joining placeholders, assuming responsibilities would have been a list
                  <p>{"Localized text for '" + exp.responsibilityKeys.join("', '") + "'"}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CV Download Section */}
      <section className="about-section">
        <h2>Download</h2>
        <button 
          href={cvPaths['en'] || cvPaths.en} 
          download={`cv_arthur_wuhrlin_en.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="with-border"
        >
          Download CV
        </button> {/* Changed button to a for correct download behavior */}
      </section>
    </div>
  );
};

export default AboutPage;
