import React from 'react';
import { posts } from '../data';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <div className="post-list">
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;