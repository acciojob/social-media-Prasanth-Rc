import React, { useState } from 'react';
import { users, posts } from '../data';

const UserList = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleClick = (id) => {
    setSelectedUserId(id);
  };

  const filteredPosts = posts.filter(post => post.author === selectedUserId);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleClick(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>

      {filteredPosts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
