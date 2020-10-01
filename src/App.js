import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Massages/Massages';
import Users from './components/Users/Users';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/profile" component={Profile} />
      <Route path="/users" component={Users} />
      <Route path="/massages" component={Messages} />
      <Footer />
    </div>
  );
}

export default App;
