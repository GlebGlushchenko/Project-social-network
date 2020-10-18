import React from 'react';

import Paginator from '../Paginator/Paginator';
import User from './User/User';

const Users = ({ users }) => {
  return (
    <section className="users__wrapper">
      <h3 className="users__title">.Users</h3>
      <div className="container">
        <div className="users">
          {users.map((user) => (
            <User key={user.id} />
          ))}
        </div>

        <Paginator />
      </div>
    </section>
  );
};

export default Users;
