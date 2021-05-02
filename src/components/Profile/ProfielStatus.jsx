import React from 'react'

const ProfileStatus = ({ status, updateStatus }) => {
  const [inputVisabiliti, setInputVisabiliti] = React.useState(true)
  const [statusText, setStatusText] = React.useState('')

  const handlerVisabilitiInput = () => {
    setInputVisabiliti(!inputVisabiliti)
  }

  const handlerInputText = (e) => {
    setStatusText(e.currentTarget.value)
  }

  const handlerBlur = () => {
    setInputVisabiliti((prev) => {
      return {
        ...prev,
        inputVisabiliti: false,
      }
    })
    updateStatus(statusText)
  }
  return (
    <li onDoubleClick={handlerVisabilitiInput} className="profile__description-list-item">
      Status:
      <b>
        {inputVisabiliti ? (
          status
        ) : (
          <input
            autoFocus={true}
            onBlur={handlerBlur}
            onChange={(e) => handlerInputText(e)}
            value={statusText}
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

export default ProfileStatus
