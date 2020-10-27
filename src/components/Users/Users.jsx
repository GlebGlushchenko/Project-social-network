import React from 'react';

import axios from 'axios';

import Paginator from '../Paginator/Paginator';
import User from './User/User';
import userAvatar from '../../assets/img/user.png';

const Users = ({ users, followUser, unfollowUser, setUsers }) => {
  React.useEffect(() => {
    // setUsers([
    //   {
    //     photo: userAvatar,
    //     name: 'Gleb',
    //     id: 1,
    //     follow: true,
    //     status: 'Hello boys',
    //     location: { city: 'Petrozavodsk', country: 'Russian' },
    //   },
    //   {
    //     photo: userAvatar,
    //     name: 'Oly',
    //     id: 2,
    //     follow: true,
    //     status: 'Hello boys',
    //     location: { city: 'Minsk', country: 'Belarus' },
    //   },
    //   {
    //     photo: userAvatar,
    //     name: 'Tany',
    //     id: 3,
    //     follow: false,
    //     status: 'Boys',
    //     location: { city: 'Moscow', country: 'Russian' },
    //   },
    //   {
    //     photo: userAvatar,
    //     name: 'Artem',
    //     id: 4,
    //     follow: true,
    //     status: 'Hello',
    //     location: { city: 'City', country: 'County' },
    //   },
    //   {
    //     photo: userAvatar,
    //     name: 'Vova',
    //     id: 5,
    //     follow: false,
    //     status: 'Status',
    //     location: { city: 'City', country: 'County' },
    //   },
    //   {
    //     photo: userAvatar,
    //     name: 'Den',
    //     id: 6,
    //     follow: true,
    //     status: 'Status',
    //     location: { city: 'City', country: 'County' },
    //   },
    // ]);
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users', {
        params: {
          count: 12,
        },
      })
      .then((response) => {
        setUsers(response.data.items);
      });
  }, []);

  const defaultlocation = {
    location: { city: 'Minsk', country: 'Belarus' },
  };

  return (
    <section className="users__wrapper">
      <h3 className="users__title">.Users</h3>
      <div className="container">
        <div className="users">
          {users.map((user, index) => (
            <User
              userAvatar={user.photo}
              location={(user.location = defaultlocation)}
              status={user.status}
              unfollowUser={unfollowUser}
              followUser={followUser}
              name={user.name}
              follow={user.follow}
              index={user.id}
              key={index}
            />
          ))}
        </div>

        <Paginator />
      </div>
    </section>
  );
};

export default Users;
