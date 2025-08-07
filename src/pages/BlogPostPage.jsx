import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from '../posts';
import styles from '../styles/components/BlogPage.module.css';

const BlogPostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const currentPost = posts.find(p => p.id === postId);
    if (currentPost) {
      setPost(currentPost);
      fetch(`/posts/${currentPost.file}`)
        .then(response => response.text())
        .then(text => setContent(text))
        .catch(error => console.error('Error fetching post content:', error));
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container ${styles.blogPostPage}`}>
      <h1>{post.title}</h1>
      <p className={styles.postDate}>{post.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPostPage;
