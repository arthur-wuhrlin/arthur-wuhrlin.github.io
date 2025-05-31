import React from 'react';
// useLanguage import removed

const AboutPage = () => {
  // useLanguage() call removed

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
    { id: 'edu3', degreeKey: 'Master of Science in Software Engineering', institutionKey: 'National University of Singapore', period: '2024 - 2025', descriptionKeys: ['Relevant coursework: Advanced Algorithms, System Design, AI.'] },
    { id: 'edu2', degreeKey: 'Engineering Diploma in Computer Science', institutionKey: 'Telecom Paris', period: '2022 - 2025', descriptionKeys: ['about.education.degree2.desc1'] },
    { id: 'edu1', degreeKey: 'Preparatory Classes MPSI/MP*', institutionKey: 'Lycée Kléber, Strasbourg"', period: '2020 - 2022', descriptionKeys: [] },
  ];

  const experienceData = [
    { id: 'exp1', roleKey: 'about.experience.role1.name', companyKey: 'about.experience.role1.company', period: 'Summer 2023', responsibilityKeys: ['about.experience.role1.resp1', 'about.experience.role1.resp2'] },
  ];

  const cvPaths = {
    en: '/cv_arthur_wuhrlin_en.pdf',
    fr: '/cv_arthur_wuhrlin_fr.pdf' // Kept for structure, but 'fr' path won't be used
  };

  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-section">
        <h2>About me</h2>
        <div className="introduction-text">
          <p>Hello! I'm Arthur, a master's computer science student. I'm curious about so many things ranging from arts to hard science, and of course, everything linked to computer science.My motivation is all about understanding deeply new concepts, and it's even better if I can do so with some hand-on projects ! I'm one of those that learn by doing.</p>
          <p>Here is a small and non-exhaustive list of what I'm interested in :</p>
          <p>Hybrid rendering using Raytracing and ML based Denoisers : it was my original Master's thesis project.</p>
          <p>- How do we do PBR ? : I read some extracts of the well-known PBRT book to get a rough understanding of what is different from real-time techniques.</p>
          <p>- Procedural generation : I am huge fan of terrain generation using techniques like Perlin or Simplex Noise.</p>
          <p>- How does the graphics pipeline work ? : I started reading the wonderful 'A trip through the Graphics Pipeline 2011' blog posts from ryg.</p>
          <p>- How does a basic CPU work ? : I followed a course at Telecom Paris to understand the architecture of the RISC-V, and design a simple cpu.</p>
          <p>- How do GPUs work ? : I read several articles on that, but need to dig deeper to understand the batch scheduling process, and how memory accesses are handled.</p>
          <p>- How does a Game Engine work ? : I wrote my own Game Engine in OpenGL and C++ for the GlassOverflow project.</p>
          <p>- ...</p>

          <p>This list points out that, in computer science, my sweet spot lies on rendering techniques and low-level programming. I'm especially excited whenever it comes to programming using GPUs.</p>
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
              <h3>{edu.degreeKey} | {edu.institutionKey}</h3>
              <p> {edu.period}</p>
              {edu.descriptionKeys && edu.descriptionKeys.length > 0 && (
                edu.descriptionKeys.map(descKey => <p key={descKey}>{descKey}</p>)
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
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
        <h2>Download CV</h2>
        <a 
          href={cvPaths.en} // Default to English CV
          download="cv_arthur_wuhrlin_en.pdf" // Default to English CV name
          target="_blank" 
          rel="noopener noreferrer" 
          className="cv-download-button with-border" // Added with-border for styling like a button
        >
          Download CV
        </a> {/* Changed button to a for correct download behavior */}
      </section>
    </div>
  );
};

export default AboutPage;
