import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Messages from './components/Massages';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Messages /> */}
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
