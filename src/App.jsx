import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="container">
      <div className="left">
      <Header/>
      <Grid/>
      <Footer/>
      </div>
      <div className="right">
        <Sidebar/>
      </div>

    </div>
  )
}

export default App