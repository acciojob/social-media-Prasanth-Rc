import React, { useState } from 'react';
import { notifications } from '../data';

const NotificationList = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <section className="notificationsList">
      <button className="button" onClick={() => setShowNotifications(true)}>
        Refresh Notifications
      </button>
      {showNotifications &&
        notifications.map((note, index) => (
          <div key={index}>{note}</div>
        ))}
    </section>
  );
};

export default NotificationList;
