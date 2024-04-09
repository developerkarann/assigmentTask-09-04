import React from 'react'
import './css/sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const menutabs = [
    {
      title: 'Activites',
      path: '/',
      icon: '/assets/icons/Timer.png'
    },
    {
      title: 'Analytics',
      path: '/',
      icon: '/assets/icons/Chart.png'
    },
    {
      title: 'Transformation',
      path: '/',
      icon: '/assets/icons/Rocket.png'
    },
    {
      title: 'Library',
      path: '/',
      icon: '/assets/icons/Layers.png'
    },
  ]


  return (
    <div className="sidebar">
      <div className="container">

        <div className="backIcon">
          <Link to='/'>
            <img src='/assets/icons/Sidebar.png' alt="" />
          </Link>
        </div>

        <div className="heading">
          <img src="/assets/icons/Box.png" alt="" />
          <h1>Catalix</h1>
        </div>

        <div className="menuTabs">

          <div className="home-tab active tabs">
            <img src="/assets/icons/Home.png" alt="" />
            <p>Home</p>
          </div>

          {
            menutabs?.map((tab, index) => (
              <div className="home-tab tabs" key={index}>
                <img src={tab.icon} alt="" />
                <p>{tab.title}</p>
              </div>
            ))
          }



        </div>

        <div className="menuTabs border-top" >
          <div className="home-tab tabs">
            <img src="/assets/icons/Settings.png" alt="" />
            <p>Settings</p>
          </div>
          <div className="home-tab tabs">
            <img src="/assets/icons/Logout.png" alt="" />
            <p>logout</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Sidebar


