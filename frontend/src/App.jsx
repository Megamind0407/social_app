// eslint-disable-next-line no-unused-vars
import React from 'react'
import  {Navbar} from './components/Navbar'
import  {Hero}  from './components/Hero'
import Features from './components/Features'
import {Testimonials}  from './components/Testimonials'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'

const HomePage = () => {
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

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/signup' element= {<SignUp/>}/>
      <Route path='/signin' element= {<SignIn/>}/>
      <Route path='/' element= {<HomePage/>}/>
    </Routes>
    </>
  )
}

