import React from 'react'
import { Redirect } from 'react-router'

import Messages from './Messages'
import MessagesUsers from './MessagesUsers'
import { handlerKeyUp } from '../../assets/util/handlerKeyUp'

const MessagesPage = ({
  masseagesUsers,
  messagesText,
  newMessageText,
  addMessageAC,
  removeMessageAC,
  updateNewMessageTextAC,
  isAuth,
}) => {
  const newMessageTextRef = React.useRef()

  const onAddMessage = () => {
    if (newMessageTextRef.current.value) {
      addMessageAC(newMessageTextRef.current.value)
    } else alert('ENTER TEXT')
  }

  const onChangeNewMessagetext = () => {
    updateNewMessageTextAC(newMessageTextRef.current.value.trim())
  }

  if (isAuth === false) return <Redirect to="/login" />

  return (
    <section className="messages__section">
      <h3>.Messages</h3>
      <div className="container">
        <div className="messages">
          <div className="messages__users">
            <MessagesUsers masseagesUsers={masseagesUsers} />
          </div>
          <div className="messages__content">
            <Messages messagesText={messagesText} removeMessage={removeMessageAC} />

            <div className="messages__controle">
              <input
                onKeyUp={(e) => handlerKeyUp(e, onAddMessage)}
                onChange={onChangeNewMessagetext}
                value={newMessageText}
                ref={newMessageTextRef}
                className="messages__input"
                placeholder="enter massage text..."
                type="text"
              />
              <button onClick={onAddMessage} className="messages__btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MessagesPage
