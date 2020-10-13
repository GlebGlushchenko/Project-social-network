import React from 'react';
import { NavLink } from 'react-router-dom';
import MassageUser from './MessageUser';

import userAvatar from '../../assets/img/user.png';
import MassageItemLeft from './MassageItemLeft';
import MassagesItme from './MassagesItem';


const Messages = () => {
  return (
    <section className="massages__section">
      <h3>Massages</h3>
      <div className="container">
        <div className="massages">
          <div className="massages__users">
            <ul className="massages__users-list">
              <NavLink className="massages__users-link" to='/massages/1'>
                <MassageUser userName="Gleb" />
              </NavLink>
              <NavLink className="massages__users-link" to='/massages/2'>
                <MassageUser userName="Vova" />
              </NavLink>
              <NavLink className="massages__users-link" to='/massages/3'>
                <MassageUser userName="Artem" />
              </NavLink>
              <NavLink className="massages__users-link" to='/massages/4'>
                <MassageUser userName="Zakssss" />
              </NavLink>
              <NavLink className="massages__users-link" to='/massages/5'>
                <MassageUser userName="Cheed" />
              </NavLink>
            </ul>
          </div>
          <div className="massages__content">
            <div className="massages__content__inner">
              <MassageItemLeft massageText="Hi" />

              <MassagesItme massageText="Lorem Ipsum has been" />

              <MassageItemLeft massageText="Wellcome" />

              <MassagesItme massageText="Bi" />

              <MassageItemLeft massageText="lorem ipsum" />
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
