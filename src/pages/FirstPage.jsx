import React from 'react'
import Sidebar from '../components/Sidebar'
import './css/firstpage.css'
import Home from '../components/Home'

const FirstPage = () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <Home />

      </div>
    </>
  )
}

export default FirstPage