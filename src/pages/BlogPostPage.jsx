import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import posts from '../posts';

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
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPostPage;
