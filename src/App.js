import React from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import NavContainer from './components/Nav/NavContainer'

import News from './components/News/News'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { Redirect, Route } from 'react-router-dom'
import MessagesContainer from './components/Messages/Container/MessagesContainer'
import ProfileContainer from './components/Profile/ProfileContainer'

const App = (isAuth) => {
  return (
    <div className="App">
      <NavContainer />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/messages" render={() => <MessagesContainer />} />
      <Route path="/news" render={News} />
      <Route path="/login" render={Login} />
      <Footer />
    </div>
  )
}

export default App
