document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');

  async function loadPageContent(url) {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          const text = await response.text();
          return text;
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }

  console.log(document.getElementById('home-btn'))
  document.getElementById('home-btn').addEventListener('click', async () => {
      const newPageContent = await loadPageContent('./html/page_content/home.html');
      content.innerHTML = newPageContent;
  });

  document.getElementById('projects-btn').addEventListener('click', async () => {
      const newPageContent = await loadPageContent('./html/page_content/projects.html');
      content.innerHTML = newPageContent;
  });

  
    document.getElementById('blog-btn').addEventListener('click', async () => {
      const newPageContent = await loadPageContent('./html/page_content/blog.html');
      content.innerHTML = newPageContent;
  });  
  
    document.getElementById('about-btn').addEventListener('click', async () => {
      const newPageContent = await loadPageContent('./html/page_content/about.html');
      content.innerHTML = newPageContent;
  });
});