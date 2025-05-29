import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import UserList from './components/UserList';
import NotificationList from './components/NotificationList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
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