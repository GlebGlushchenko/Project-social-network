import React from 'react';
import Loader from '../../assets/util/Loader';

import Paginator from '../Paginator/Paginator';
import User from './User/User';

const Users = (props) => {
  return (
    <section className="users__wrapper">
      <h3 className="users__title">.Users</h3>
      <div className="container">
        <div className="users">
          {!props.isFetching
            ? props.users.map((user, index) => (
                <User
                  photos={user.photos}
                  location={user.location}
                  status={user.status}
                  unfollowUser={props.unfollowUser}
                  followUser={props.followUser}
                  name={user.name}
                  follow={user.follow}
                  index={user.id}
                  key={index}
                />
              ))
            : Array(8)
                .fill(0)
                .map((_, index) => <Loader />)}
        </div>

        <Paginator
          onSelectedPage={props.onSelectedPage}
          totalUserCount={props.totalUserCount}
          currentPage={props.currentPage}
          pageSize={props.pageSize}
        />
      </div>
    </section>
  );
};

export default Users;
