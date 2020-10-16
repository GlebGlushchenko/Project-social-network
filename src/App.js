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

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/profile" component={Profile} />
      <Route path="/users" component={Users} />
      <Route path="/massages" component={Messages} />
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
      <Footer />
    </div>
  );
}

export default App;
