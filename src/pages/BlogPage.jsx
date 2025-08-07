import React from 'react';
import ItemsGrid from '../components/ItemsGrid';
import posts from '../posts';

const BlogPage = () => {
  const blogItems = posts.map(post => ({
    title: post.title,
    link: `/blog/${post.id}`,
    descriptionParas: [post.brief],
  }));

  return (
    <div>
      <h2 className="text">Blog</h2>
      <ItemsGrid items={blogItems} />
    </div>
  );
};

export default BlogPage;
