import {
  updateNewMessageTextAC,
  addMessageAC,
  removeMessageAC,
} from '../../redux/messeges-reducer';
import { connect } from 'react-redux';
import MessagesPage from '../MessagesPage';

const mapStateToProps = (state) => {
  return {
    masseagesUsers: state.messagesPage.masseagesUsers,
    messagesText: state.messagesPage.messagesText,
    newMessageText: state.messagesPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMessage: (indexe) => {
      dispatch(removeMessageAC(indexe));
    },
    addMessage: (text) => {
      dispatch(addMessageAC(text));
    },
    updateMessageText: (text) => {
      dispatch(updateNewMessageTextAC(text));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPage);

export default MessagesContainer;
