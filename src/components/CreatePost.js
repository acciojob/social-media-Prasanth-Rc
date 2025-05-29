import React, { useState } from 'react';
import { users, addPost } from '../data';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      title,
      content,
      author: parseInt(author)
    });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePost;
