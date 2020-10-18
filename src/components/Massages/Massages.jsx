import React from 'react';
import { NavLink } from 'react-router-dom';
import MassageUser from './MessageUser';

import MassagesItme from './MassagesItem';

const Messages = ({ masseagesUsers }) => {
  const [massagesText, setMassagesText] = React.useState([
    { text: 'Hi' },
    { text: 'Wellcome' },
    { text: 'lorem ipsum' },
    { text: 'Lorem Ipsum has been' },
    { text: 'Bye' },
    { text: 'lorem ipsum' },
  ]);

  const [massagText, setMassagText] = React.useState();

  const toggleText = (e) => {
    const val = e.target.value;
    setMassagText(val.trim());
  };

  const sendMassage = () => {
    if (massagText) {
      setMassagesText((prevState) => [...prevState, { text: massagText }]);
      setMassagText('');
    } else {
      alert('Введите текст');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      sendMassage();
    }
  };

  const removeMassage = (index) => {
    setMassagesText((prevState) =>
      prevState.filter((_, curIndex) => {
        if (index !== curIndex) {
          return true;
        }
        return false;
      }),
    );
  };

  return (
    <section className="massages__section">
      <h3>.Massages</h3>
      <div className="container">
        <div className="massages">
          <div className="massages__users">
            <ul className="massages__users-list">
              {masseagesUsers.map((user) => (
                <NavLink
                  className="massages__users-NavLink"
                  key={user.id}
                  to={`/massages/${user.id}`}>
                  <MassageUser userName={user.name} />
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="massages__content">
            <div className="massages__content__inner">
              {massagesText.map((text, index) => (
                <MassagesItme
                  index={index}
                  removeMassage={removeMassage}
                  userName={'Name'}
                  key={index}
                  massageText={text.text}
                />
              ))}
            </div>

            <div className="massages__controle">
              <input
                onKeyUp={handleKeyUp}
                value={massagText}
                onChange={toggleText}
                className="massages__input"
                placeholder="enter massage text..."
                type="text"
              />
              <button onClick={sendMassage} className="massages__btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Messages;
