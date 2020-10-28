import React from 'react';

import axios from 'axios';

import Paginator from '../Paginator/Paginator';
import User from './User/User';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUserCount(response.data.totalCount);
      });
  }
  onSelectedPage = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <section className="users__wrapper">
        <h3 className="users__title">.Users</h3>
        <div className="container">
          <div className="users">
            {this.props.users.map((user, index) => (
              <User
                photos={user.photos}
                location={user.location}
                status={user.status}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser}
                name={user.name}
                follow={user.follow}
                index={user.id}
                key={index}
              />
            ))}
          </div>

          <Paginator
            onSelectedPage={this.onSelectedPage}
            totalUserCount={this.props.totalUserCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
          />
        </div>
      </section>
    );
  }
}

// const Users = ({ users, followUser, unfollowUser, setUsers }) => {
//   if (users.length === 0) {
//     axios
//       .get('https://social-network.samuraijs.com/api/1.0/users', {
//         params: {
//           count: 12,
//           page: 499,
//         },
//       })
//       .then((response) => {
//         setUsers(response.data.items);
//       });
//   }

//   const defaultlocation = {
//     location: { city: 'Minsk', country: 'Belarus' },
//   };

//   return (
//     <section className="users__wrapper">
//       <h3 className="users__title">.Users</h3>
//       <div className="container">
//         <div className="users">
//           {users.map((user, index) => (
//             <User
//               photos={user.photos}
//               location={(user.location = defaultlocation)}
//               status={user.status}
//               unfollowUser={unfollowUser}
//               followUser={followUser}
//               name={user.name}
//               follow={user.follow}
//               index={user.id}
//               key={index}
//             />
//           ))}
//         </div>

//         <Paginator />
//       </div>
//     </section>
//   );
// };

export default Users;
