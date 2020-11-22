import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../redux/auth-reducer';
import { setUserProfile } from '../redux/profile-reducer';

import Nav from './Nav';

class NavContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login,
            axios
              .get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
              .then((response) => {
                this.props.setUserProfile(response.data);
              }),
          );
        } else alert('ERROR');
      });
  }
  render() {
    return <Nav {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(NavContainer);
