import React from 'react';
import ItemsGrid from '../components/ItemsGrid';
import posts from '../posts';
import styles from '../styles/components/BlogPage.module.css';

const BlogPage = () => {
  const blogItems = posts.map(post => ({
    title: post.title,
    link: `/blog/${post.id}`,
    descriptionParas: [post.brief],
  }));

  return (
    <div className="container">
      <h2 className="text-title">Blog</h2>
      <ItemsGrid items={blogItems} />
    </div>
  );
};

export default BlogPage;
