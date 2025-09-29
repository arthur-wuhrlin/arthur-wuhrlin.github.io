import React from 'react';
import ItemsGrid from '../components/ItemsGrid';
import posts from '../posts';
import defaultStyles from '../styles/components/DefaultStyles.module.css';


const BlogPage = () => {
  const blogItems = posts.map(post => ({
    title: post.title,
    link: `/blog/${post.id}`,
    descriptionParas: [post.brief],
  }));

  return (
    <div className="container">
      <ItemsGrid items={blogItems} styles={defaultStyles} />
    </div>
  );
};

export default BlogPage;
