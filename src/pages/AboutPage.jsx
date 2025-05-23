import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t, language } = useLanguage(); // Assuming 'language' is provided by useLanguage for introText

  // Placeholder Data (to be moved to LanguageContext or a dedicated data file later)
  const introTextKey = 'about.introduction'; // Simplified to a single key

  const skillsData = [
    { id: 'skill1', name: 'JavaScript', level: 90, levelDescriptionKey: 'skills.level.expert' },
    { id: 'skill2', name: 'React', level: 85, levelDescriptionKey: 'skills.level.expert' },
    { id: 'skill3', name: 'Python', level: 70, levelDescriptionKey: 'skills.level.proficient' },
    { id: 'skill4', name: 'CSS', level: 60, levelDescriptionKey: 'skills.level.intermediate' },
  ];

  const educationData = [
    { id: 'edu1', degreeKey: 'education.degree1.name', institutionKey: 'education.degree1.institution', period: '2020 - 2024', descriptionKeys: ['education.degree1.desc1'] },
    { id: 'edu2', degreeKey: 'education.degree2.name', institutionKey: 'education.degree2.institution', period: '2018 - 2020', descriptionKeys: [] },
  ];

  const experienceData = [
    { id: 'exp1', roleKey: 'experience.role1.name', companyKey: 'experience.role1.company', period: 'Summer 2023', responsibilityKeys: ['experience.role1.resp1', 'experience.role1.resp2'] },
  ];

  const cvPaths = {
    en: '/cv_arthur_wuhrlin_en.pdf',
    fr: '/cv_arthur_wuhrlin_fr.pdf'
  };

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
              <h3>{t(edu.degreeKey)}</h3>
              <p><em>{t(edu.institutionKey)}</em> | {edu.period}</p>
              {edu.descriptionKeys && edu.descriptionKeys.length > 0 && (
                <ul>
                  {edu.descriptionKeys.map(descKey => <li key={descKey}>{t(descKey)}</li>)}
                </ul>
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
                <ul>
                  {exp.responsibilityKeys.map(respKey => <li key={respKey}>{t(respKey)}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CV Download Section */}
      <section className="about-section">
        <h2>{t('about.cvDownloadTitle')}</h2>
        <a 
          href={cvPaths[language] || cvPaths.en} 
          download={`cv_arthur_wuhrlin_${language}.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cv-download-button"
        >
          {t('about.cvDownloadButton')}
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
