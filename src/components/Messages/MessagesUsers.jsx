import React from 'react';
import { NavLink } from 'react-router-dom';

import MassageUser from './MessageUser';

const MessagesUsers = ({ masseagesUsers }) => {
  return (
    <ul className="messages__users-list">
      {masseagesUsers.map((user) => (
        <NavLink className="messages__users-NavLink" key={user.id} to={`/messages/${user.id}`}>
          <MassageUser userName={user.name} />
        </NavLink>
      ))}
    </ul>
  );
};

export default React.memo(MessagesUsers);
