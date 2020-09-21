import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Messages from './components/Massages';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Users /> */}
      {/* <Messages /> */}
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
