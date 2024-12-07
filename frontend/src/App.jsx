// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import  {Navbar} from './components/Navbar'
import  {Hero}  from './components/Hero'
import Features from './components/Features'
import {Testimonials}  from './components/Testimonials'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { ThemeContext } from './components/ThemeContext'; 
// import { useAuth } from './components/context/AuthContext';
import { SignIn }  from './components/pages/SignIn/SignIn';
import { SignUp } from './components/pages/SignUp/SignUp'
import { Users } from './components/pages/Users/Users';
import { Home } from './components/pages/Home/Home';
import { Messages } from './components/pages/Messages/Messages';

const HobbylyPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Footer/>
    </>
  )
}
const HomePage = () => {
  return(
  <>
  <Navbar/>
  <Home/>
  </>

  )
}
const Message = () => {
  return(
    <>
    <Navbar/>
    <Messages/>
    </>
  )
}
const UserPage = () => {
  return(
    <>
    <Navbar/>
    <Users/>
    </>
  )
}
export const App = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
    <Routes>
      <Route path='/signup' element= {<SignUp/>}/>
      <Route path='/signin' element= {<SignIn/>}/>
      <Route path='/' element= {<HobbylyPage/>}/>
      <Route path='/home' element= {<HomePage/>}/>
      <Route path='/users' element= {<UserPage/>}/>
      <Route path='/messages' element= {<Message/>}/>
    </Routes>
    </div>
  )
}

