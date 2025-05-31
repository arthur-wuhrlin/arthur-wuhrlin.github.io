import React from 'react';
// useLanguage import removed

const HomePage = () => {
  // useLanguage() call removed

  return (
    <div>
      <h1 className="text-title" dangerouslySetInnerHTML={{ __html: "Hi, I'm <span class='text-title-name'>Arthur Wuhrlin</span>" }} /> 
      <h2>And this is my Portfolio</h2> {/* Content updated */}
    </div>
  );
};

export default HomePage;
