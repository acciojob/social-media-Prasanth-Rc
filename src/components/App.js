import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import PostList from './PostList';
import UserList from './UserList';
import NotificationList from './NotificationList';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GenZ</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:postId" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;