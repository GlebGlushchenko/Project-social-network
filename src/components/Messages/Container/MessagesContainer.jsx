import { updateNewMessageTextAC, addMessageAC, removeMessageAC } from '../../redux/messeges-reducer'
import { connect } from 'react-redux'
import MessagesPage from '../MessagesPage'
import { withAuthRedirect } from '../../../hoc/AuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    masseagesUsers: state.messagesPage.masseagesUsers,
    messagesText: state.messagesPage.messagesText,
    newMessageText: state.messagesPage.newMessageText,
  }
}

export default compose(
  connect(mapStateToProps, { removeMessageAC, addMessageAC, updateNewMessageTextAC }),
  withAuthRedirect,
)(MessagesPage)
