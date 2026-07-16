import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../contexts/ThemeContext';
import posts from '../posts';
import styles from '../styles/components/BlogPage.module.css';

const BlogPostPage = () => {
  const { postId } = useParams();
  const { theme } = useTheme();
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

  const syntaxTheme = theme === 'dark' ? oneDark : oneLight;
  const syntaxStyle = {
    ...syntaxTheme,
    'pre[class*="language-"]': {
      ...(syntaxTheme['pre[class*="language-"]'] || {}),
      background: 'transparent',
      color: 'inherit',
    },
    'code[class*="language-"]': {
      ...(syntaxTheme['code[class*="language-"]'] || {}),
      background: 'transparent',
      color: 'inherit',
    },
  };

  return (
    <div className={`container ${styles.blogPostPage}`}>
      <h1>{post.title}</h1>
      <p className={styles.postDate}>{post.date}</p>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={syntaxStyle}
                language={match[1]}
                PreTag="pre"
                customStyle={{
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  margin: '1rem 0',
                  backgroundColor: 'var(--background-color-2)',
                  border: '1px solid var(--theme-text-color)',
                  color: 'var(--theme-text-color)',
                }}
                codeTagProps={{ style: { background: 'transparent', color: 'inherit' } }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPostPage;
