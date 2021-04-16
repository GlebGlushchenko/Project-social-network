import React from 'react'
import Loader from '../../assets/util/Loader'
import ReactPaginate from 'react-paginate'

import User from './User/User'

const Users = ({ props, onSelectedPage }) => {
  return (
    <section className="users__wrapper">
      <h3 className="users__title">.Users</h3>
      <div className="container">
        <div className="users">
          {!props.isFetching
            ? props.users.map((user, index) => (
                <User
                  photos={user.photos}
                  location={user.location}
                  status={user.status}
                  name={user.name}
                  follow={user.followed}
                  index={user.id}
                  key={index}
                  usersId={user.id}
                  setDisabledBtn={props.setDisabledBtn}
                  followUserThunkCreator={props.followUserThunkCreator}
                  unFollowUserThunkCreator={props.unFollowUserThunkCreator}
                />
              ))
            : Array(8)
                .fill(0)
                .map((_, index) => <Loader key={index} />)}
        </div>
        <ReactPaginate
          initialPage={0}
          pageCount={props.totalUserCount / 10}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          onPageChange={(page) => {
            onSelectedPage(page)
          }}
        />
      </div>
    </section>
  )
}

export default Users
