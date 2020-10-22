import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Massages/Massages';
import News from './components/News/News';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Route
        exact
        path="/profile"
        render={() => (
          <Profile
            newPostText={props.state.profilePage.newPostText}
            dispatch={props.dispatch}
            postText={props.state.profilePage.postText}
          />
        )}
      />
      <Route path="/users" render={() => <Users users={props.state.userPage.users} />} />
      <Route
        path="/massages"
        render={() => (
          <Messages
            dispatch={props.dispatch}
            newMessageText={props.state.messagesPage.newMessageText}
            masseagesUsers={props.state.messagesPage.masseagesUsers}
            massagesText={props.state.messagesPage.massagesText}
          />
        )}
      />
      <Route path="/news" render={News} />
      <Route path="/login" render={Login} />
      <Footer />
    </div>
  );
}

export default App;
