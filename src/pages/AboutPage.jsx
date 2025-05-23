import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t, language } = useLanguage(); // Assuming 'language' is provided by useLanguage for introText

  // Placeholder Data (to be moved to LanguageContext or a dedicated data file later)
  const introTextKey = 'about.introduction'; // Simplified to a single key

  const skillsData = [
    { id: 'skill1', name: 'C++', level: 80, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill2', name: 'Vulkan', level: 70, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill3', name: 'OpenGL', level: 80, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill4', name: 'C#', level: 75, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill5', name: 'Unity', level: 85, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill6', name: 'Python', level: 80, levelDescriptionKey: 'about.skills.level.advanced' },
    { id: 'skill7', name: 'C', level: 65, levelDescriptionKey: 'about.skills.level.intermediate' },
    { id: 'skill8', name: 'Java', level: 60, levelDescriptionKey: 'about.skills.level.intermediate' },
    { id: 'skill9', name: 'React', level: 45, levelDescriptionKey: 'about.skills.level.beginner' },
    { id: 'skill10', name: 'CSS', level: 45, levelDescriptionKey: 'about.skills.level.beginner' },
    { id: 'skill11', name: 'bash', level: 45, levelDescriptionKey: 'about.skills.level.beginner' },
  ];

  const educationData = [
    { id: 'edu3', degreeKey: 'about.education.degree3.name', institutionKey: 'about.education.degree3.institution', period: '2024 - 2025', descriptionKeys: ['about.education.degree3.desc1'] },
    { id: 'edu2', degreeKey: 'about.education.degree2.name', institutionKey: 'about.education.degree2.institution', period: '2022 - 2025', descriptionKeys: ['about.education.degree2.desc1'] },
    { id: 'edu1', degreeKey: 'about.education.degree1.name', institutionKey: 'about.education.degree1.institution', period: '2020 - 2022', descriptionKeys: [] },
  ];

  const experienceData = [
    { id: 'exp1', roleKey: 'about.experience.role1.name', companyKey: 'about.experience.role1.company', period: 'Summer 2023', responsibilityKeys: ['about.experience.role1.resp1', 'about.experience.role1.resp2'] },
  ];

  const cvPath = '/cv_arthur_wuhrlin.pdf'; // Example path

  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-section">
        <h2>{t('about.navTitle')}</h2>
        <p className="introduction-text">{t(introTextKey)}</p>
      </section>

      {/* Skills Section */}
      <section className="about-section">
        <h2>{t('about.skillsTitle')}</h2>
        <div className="skills-container">
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-item">
              <h3>{skill.name}</h3> {/* Skill name is not translated as it's a proper noun / tech name */}
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${skill.level}%` }}>
                  {/* Optional: {skill.level}% */}
                </div>
              </div>
              <p className="skill-level-description">{t(skill.levelDescriptionKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="about-section">
        <h2>{t('about.educationTitle')}</h2>
        <div className="education-container">
          {educationData.map(edu => (
            <div key={edu.id} className="cv-item">
              <h3>{t(edu.degreeKey)} | {t(edu.institutionKey)}</h3>
              <p> {edu.period}</p>
              {edu.descriptionKeys && edu.descriptionKeys.length > 0 && (
                edu.descriptionKeys.map(descKey => <p key={descKey}>{t(descKey)}</p>)
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-section">
        <h2>{t('about.experienceTitle')}</h2>
        <div className="experience-container">
          {experienceData.map(exp => (
            <div key={exp.id} className="cv-item">
              <h3>{t(exp.roleKey)}</h3>
              <p><em>{t(exp.companyKey)}</em> | {exp.period}</p>
              {exp.responsibilityKeys && exp.responsibilityKeys.length > 0 && (
                  <p>{exp.responsibilityKeys.map(respKey => {t(respKey)})}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CV Download Section */}
      <section className="about-section">
        <h2>{t('about.cvDownloadTitle')}</h2>
        <button href={cvPath} download target="_blank" rel="noopener noreferrer" className="with-border">
          {t('about.cvDownloadButton')}
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
