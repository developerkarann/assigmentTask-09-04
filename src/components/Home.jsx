import React from 'react'
import './css/home.css'
import SearchBar from './SearchBar'
import { Link, useNavigate } from 'react-router-dom'



const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="home bg-purple-400  ">
                <div className="column left ">
                    {/* Search bar */}

                    <SearchBar />


                    <div className="text_container">
                        <div className="heading">
                            <h1>Set-up Catalix for Success</h1>
                        </div>

                        <div className="subHeading">
                            <p>Get Catalix up to date or start your transformation by following the guide below.</p>
                        </div>
                    </div>


                    <div className="card">
                        <div className="index">
                            <button>2/6</button>
                        </div>
                        <div className="text">
                            Build your development value stream map
                        </div>
                        <div className="btn">
                            <Link to='/setup'>
                                <button >Start Building</button>
                            </Link>
                        </div>
                        <div className="pagination">
                            <div className="dot"></div>
                            <div className="dot active"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>


                </div>
                <div className="column right">
                    <div className="top-icons">
                        <img src="/assets/icons/Bell.png" alt="" />
                        <img src="/assets/icons/Bell2.png" alt="" />
                    </div>

                    <div className="text-container">
                        <div className="heading">
                            Get ready to transform
                        </div>
                        <div className="subHeading">
                            Here’s a video to get started. As your transformation progresses, you’ll get fresh tips and insights here.
                        </div>
                    </div>

                    <div className="video-container">
                        <video controls>
                            <source src="/assets/example.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Home