import React from 'react';
import userAvatar from '../../assets/img/user.png';

const Messages = () => {
  return (
    <section className="massages__section">
      <h3>Massages</h3>
      <div className="container">
        <div className="massages">
          <div className="massages__users">
            <ul className="massages__users-list">
              <li className="massages__users-item">
                <span className="avatar__users">
                  <img width="40px" src={userAvatar} alt="avatar" />
                </span>
                <span>user 1</span>
              </li>

              <li className="massages__users-item massages__users-item--active">
                <span className="avatar__users">
                  <img width="40px" src={userAvatar} alt="avatar" />
                </span>
                <span>user 2</span>
              </li>

              <li className="massages__users-item">
                <span className="avatar__users">
                  <img width="40px" src={userAvatar} alt="avatar" />
                </span>
                <span>user 3</span>
              </li>

              <li className="massages__users-item">
                <span className="avatar__users">
                  <img width="40px" src={userAvatar} alt="avatar" />
                </span>
                <span>user 4</span>
              </li>

              <li className="massages__users-item">
                <span className="avatar__users">
                  <img width="40px" src={userAvatar} alt="avatar" />
                </span>
                <span>user 5</span>
              </li>
            </ul>
          </div>
          <div className="massages__content">
            <div className="massages__content__inner">
              <div className="massages__item">
                <span className="massages__item-avatar">
                  <img width="40px" src={userAvatar} alt="" />
                </span>
                massag text 1
              </div>
              <div className="massages__item">
                massag text 2
                <span className="massages__item-avatar">
                  <img width="40px" src={userAvatar} alt="" />
                </span>
              </div>

              <div className="massages__item">
                <span className="massages__item-avatar">
                  <img width="40px" src={userAvatar} alt="" />
                </span>
                massag text 3
              </div>

              <div className="massages__item">
                massag text 4
                <span className="massages__item-avatar">
                  <img width="40px" src={userAvatar} alt="" />
                </span>
              </div>
              <div className="massages__item">
                <span className="massages__item-avatar">
                  <img width="40px" src={userAvatar} alt="" />
                </span>
                massag text 5
              </div>
            </div>
            <div className="massages__controle">
              <input className="massages__input" placeholder="enter massage text..." type="text" />
              <button className="massages__btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
