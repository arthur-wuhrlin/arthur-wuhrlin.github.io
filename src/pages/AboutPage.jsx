import React, { useState } from 'react';
import styles from '../styles/components/AboutPage.module.css';

const AboutPage = () => {
  const [openCourses, setOpenCourses] = useState({});

  const skillLevel = {
    beginner: "beginner",
    intermediate: "intermediate",
    advanced: "advanced",
    expert: "expert"
  };

  const educationData = [
    { 
      id: 'edu3',
      degreeKey: 'Master of Science in Software Engineering',
      institutionKey: 'National University of Singapore',
      period: '2024 - 2025',
      courses: []
    },
    { 
      id: 'edu2',
      degreeKey: 'Engineering Diploma in Computer Science',
      institutionKey: 'Telecom Paris',
      period: '2022 - 2025',
      courses: []
    },
    { 
      id: 'edu1', 
      degreeKey: 'Preparatory Classes MPSI/MP*', 
      institutionKey: '', 
      period: '2020 - 2022', 
      descriptionKeys: [] 
    },
  ];

  const experienceData = [
    {
      id: 'exp2', 
      roleKey: 'GPU DevTech', 
      companyKey: 'Advanced Micro Devices', 
      period: 'Jan 2026 - Present', 
      responsibilityKeys: 
      [
        'Profiling and optimization of AAA games on AMD GPUs.',
        'Investigation of problems related to Radeon Drivers, Radeon GPUs or AMD SDKs and their integration.',
      ] 
    },
    { 
      id: 'exp1', 
      roleKey: 'Research Assistant', 
      companyKey: 'National University of Singapore', 
      period: 'Jan 2025 - 6 months', 
      responsibilityKeys: 
      [
        'Development of FRAGS, a real-time 3D Gaussian Splatting streaming framework.',
        'Uses up to 76.5% less VRAM in comparison to SOTA methods.',
        'Bandwidth equivalent to 1080p, 30fps image streaming (AV1 or H.265 codecs).'
      ] 
    },
  ];

  return (
    <div className={`container ${styles.aboutPage}`}>
      {/* Introduction Section */}
      <section>
        <h2>About me</h2>
        <div className={styles.introductionText}>
          <p>Hello! I'm Arthur, a <strong>graphics engineer</strong>. I'm curious about many things ranging from <strong>arts to hard science</strong>, and of course, everything linked to <strong>computer science</strong>. My motivation is all about <strong>understanding deeply new concepts</strong>, and it's even better if I can do so with some <em>hand-on projects</em> ! I'm one of those that <em>learn by doing</em>.</p>
          <p>Here is a small and non-exhaustive list of what I already explored :</p>
          <ul>
            <li>Generating interesting terrains with <strong>Procedural generation</strong>, using multi-threading andmy own perlin noise implementation.</li>
            <li>Generating decent looking <strong>water mesh in real-time</strong>. I'd like to dig into the rendering part in the future, and improve my GPU IFFT.</li>
            <li>Implementing a simple renderer and a Ray Tracing sample using Vulkan.</li>
          </ul> 
          <p>At the moment, I'm deep into low-level optimizations on GPUs, learning of how graphics techniques are implemented in the industry and learning the details behind DX12. I'm also working on a software rasterizer in my spare time.</p>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section>
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          {skillsData.map(skill => (
            <div key={skill.id} className={styles.skillItem}>
              <h3>{skill.name}</h3>
              <div className={styles.progressBarContainer}>
                <div className={styles.progressBarFill} style={{ width: `${skill.level}%` }}>
                </div>
              </div>
              <p className={styles.skillLevelDescription}>{skill.levelDescriptionKey}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Experience Section */}
      <section>
        <h2>Experience</h2>
        <div>
          {experienceData.map(exp => (
            <div key={exp.id} className={styles.cvItem}>
              <div className={styles.cvItemHeader}>
                <div className="cv-item-main-info">
                  <h3>{exp.roleKey}</h3>
                  <p className={styles.institution}>{exp.companyKey}</p>
                </div>
                <div className="cv-item-period">
                  <p>{exp.period}</p>
                </div>
              </div>
              
              {exp.responsibilityKeys && exp.responsibilityKeys.length > 0 && (
                  // Joining placeholders, assuming responsibilities would have been a list
                  <ul>
                    {exp.responsibilityKeys.map(resp => (
                      <li>{resp}</li>
                    ))}
                  </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <div>
          {educationData.map(edu => (
            <div key={edu.id} className={styles.cvItem}>
              <div className={styles.cvItemHeader}>
                <div className="cv-item-main-info">
                  <h3>{edu.degreeKey}</h3>
                  <p className={styles.institution}>{edu.institutionKey}</p>
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
                  className={`button ${styles.toggleCoursesBtn}`}
                  style={{ marginBottom: '10px', padding: '5px 10px', fontSize: '0.9em' }}
                >
                  {openCourses[edu.id] ? 'Hide Courses' : 'Show Courses'}
                </button>
              )}

              {/* Conditionally Rendered Course List */}
              {openCourses[edu.id] && edu.courses && edu.courses.length > 0 && (
                <div className={styles.coursesList}>
                  <ul>
                    {edu.courses.map(course => (
                      <li key={course.courseName} className={styles.courseItem}>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          {course.courseName}
                        </a>
                        <p className={styles.courseDesc}>{course.desc}</p>
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
    </div>
  );
};

export default AboutPage;
