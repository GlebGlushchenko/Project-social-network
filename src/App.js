import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/MessagesPage';
import News from './components/News/News';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';
import MessagesContainer from './components/Messages/Container/MessagesContainer';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/profile" render={() => <Profile store={props.store} />} />
      <Route path="/users" render={() => <Users users={props.state.usersPage.users} />} />
      <Route path="/messages" render={() => <MessagesContainer store={props.store} />} />
      <Route path="/news" render={News} />
      <Route path="/login" render={Login} />
      <Footer />
    </div>
  );
}

export default App;
