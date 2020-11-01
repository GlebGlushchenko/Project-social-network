import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/Container/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/profile" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/messages" render={() => <MessagesContainer />} />
      <Route path="/news" render={News} />
      <Route path="/login" render={Login} />
      <Footer />
    </div>
  );
}

export default App;
