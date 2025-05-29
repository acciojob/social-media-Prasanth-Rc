import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts, updatePost } from '../data';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(postId));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  const handleSave = () => {
    updatePost({ ...post, title, content });
    navigate('/');
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="post">
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditPost;
