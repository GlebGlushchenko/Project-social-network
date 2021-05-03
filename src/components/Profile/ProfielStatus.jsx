import React from 'react'

import { handlerKeyUp } from '../../assets/util/handlerKeyUp'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    statusText: this.props.status,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.statusText)
  }

  onSatusChange = (e) => {
    this.setState({
      statusText: e.currentTarget.value,
    })
  }
  componentDidUpdate(prevProps, pPrevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ statusText: this.props.status })
    }
  }

  render() {
    return (
      <li onDoubleClick={this.activateEditMode} className="profile__description-list-item">
        Status:
        <b>
          {!this.state.editMode && (
            <span>{!this.props.status ? '-------' : this.props.status}</span>
          )}
          {this.state.editMode && (
            <input
              onKeyUp={(e) => handlerKeyUp(e, this.deactivateEditMode)}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              onChange={this.onSatusChange}
              value={this.state.statusText}
              placeholder={'Enter your new status text'}
              type="text"
            />
          )}

          <span role="img" aria-label="star">
            &#11088;
          </span>
        </b>
      </li>
    )
  }
}

export default ProfileStatus
