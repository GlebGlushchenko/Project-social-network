import React from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'
import NavContainer from './components/Nav/NavContainer'

import NewsContainer from './components/News/NewsContainer'
import UsersContainer from './components/Users/UsersContainer'
import Login from './components/Login/Login'
import { Redirect, Route } from 'react-router-dom'
import MessagesContainer from './components/Messages/Container/MessagesContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginContainer from './components/Login/LoginContainer'
import Video from './components/Media/Video'

const App = (isAuth) => {
  return (
    <div className="App">
      <NavContainer />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/messages" render={() => <MessagesContainer />} />
      <Route path="/news" render={() => <NewsContainer />} />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/video" render={() => <Video />} />
      <Footer />
    </div>
  )
}

export default App
