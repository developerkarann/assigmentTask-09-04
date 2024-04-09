import React from 'react'
import './css/nextpage.css'
import TaskGroup from './TaskGroup'

const NextPage = () => {


    return (
        <>
            <div className="next-page">
                <div className="header">
                    <div className="search_container" style={{ justifyContent: 'flex-start', marginLeft: '65px', width: '40%' }}>
                        <div className="searchBar">
                            <p><img src="/assets/icons/label-text.png" alt="" /> </p>
                            <img className='searchIcon' src="/assets/icons/leading-icon.png" alt="" />
                            <input type="text" placeholder='Search by profile, setting, artifact etc...' />
                            <img className='cancelIcon' src="/assets/icons/trailing-icon.png" alt="" />
                        </div>
                    </div>


                    <div className="menu">
                        <img src="/assets/icons/Bell.png" alt="" />
                        <img src="/assets/icons/Bell2.png" alt="" />
                        <img src="/assets/icons/Frame.png" alt="" />
                        <img className='avatar' src="/assets/icons/Ellipse.png" alt="" />
                    </div>
                </div>

                <TaskGroup />


                <div className="active-time-section">
                    <div className="text">Active Time</div>
                    <div className="sections">
                        <div className="box">
                            1 Day
                        </div>
                        <div className="box">
                            2 Day
                        </div>
                        <div className="box">
                            4 Hours
                        </div>
                        <div className="box">
                            4 Hours
                        </div>
                        <div className="box">
                            1 Day
                        </div>
                    </div>
                </div>

                <div className="wait-time-section">
                    <div className="text">Wait Time</div>
                    <div className="sections">
                        <div className="box">
                            2 Weeks (wait for availability)
                        </div>
                        <div className="box">
                            1 Week (wait for approval authority)
                        </div>
                        <div className="box">
                            2 Weeks (wait for IT support)
                        </div>
                        <div className="box">
                            1 Week (wait for test response)
                        </div>
                    </div>
                </div>
                <div className="line" >
                    <img src="/assets/icons/Line.png" alt="" />
                </div>

                <div className="total-time">
                    <div className="box">Flow time = 47 Days</div>
                    <div className="box">Total Active time = 5 Days</div>
                    <div className="box">Flow Efficiency = 11%</div>
                </div>

                <div className="save-btn">
                    <div className="btn">
                        <button>Save</button>
                    </div>
                    <div className="btn">

                    </div>
                </div>

            </div>
        </>
    )
}

export default NextPage