import React from 'react';

import axios from 'axios';

import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../redux/profile-reducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }
  render() {
    console.log(this.props.match.params.userId);
    return <Profile {...this.props} profileData={this.props.profileData} />;
  }
}

const mapDispatchToProps = (state) => ({
  profileData: state.profilePage.profile,
});

export default connect(mapDispatchToProps, { setUserProfile })(withRouter(ProfileContainer));
