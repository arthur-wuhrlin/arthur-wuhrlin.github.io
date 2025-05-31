import React from 'react';
// useLanguage import removed

const HomePage = () => {
  // useLanguage() call removed

  return (
    <div>
      <h1 className="text-title" dangerouslySetInnerHTML={{ __html: "Welcome to<br/>My Portfolio" }} /> {/* Content updated */}
      <h2>Arthur Wuhrlin - Software Engineer</h2> {/* Content updated */}
    </div>
  );
};

export default HomePage;
