import React from 'react';

import userAvatar from '../../assets/img/user.png';

const Users = () => {
  return (
    <section className="users__wrapper">
      <h3 className="users__title">Users</h3>
      <div className="container">
        <div className="users">
          <div className="users__left-colum">
            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>

            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>

            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
          <div className="users__rigth-colum">
            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>

            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>

            <div className="users__item">
              <div className="user">
                <div className="user__img">
                  <img width="70px" src={userAvatar} alt="Avatar" />
                </div>
                <span>Name</span>
              </div>
            </div>
          </div>
        </div>

        <div className="paginator">
          <div className="paginator__item paginator__item--active">1</div>
          <div className="paginator__item">2</div>
          <div className="paginator__item">3</div>
          <div className="paginator__item">4</div>
          <div className="paginator__item">5</div>
          <div className="paginator__item">...</div>
        </div>
      </div>
    </section>
  );
};

export default Users;
