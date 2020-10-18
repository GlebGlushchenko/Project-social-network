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
  const users = [
    { name: 'Gleb', id: 1 },
    { name: 'Oly', id: 2 },
    { name: 'Tany', id: 3 },
    { name: 'Artem', id: 4 },
    { name: 'Vova', id: 5 },
    { name: 'Den', id: 6 },
  ];

  const masseagesUsers = [
    { name: 'Gleb', id: 1 },
    { name: 'Vova', id: 2 },
    { name: 'Artem', id: 3 },
    { name: 'Zakssss', id: 4 },
    { name: 'Cheed', id: 5 },
  ];
  return (
    <div className="App">
      <Nav />
      <Route exact path="/profile" render={() => <Profile />} />
      <Route path="/users" render={() => <Users users={users} />} />
      <Route path="/massages" render={() => <Messages masseagesUsers={masseagesUsers} />} />
      <Route path="/news" render={News} />
      <Route path="/login" render={Login} />
      <Footer />
    </div>
  );
}

export default App;
