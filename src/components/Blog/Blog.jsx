import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faThumbsUp, faUser } from '@fortawesome/fontawesome-free-solid'
import './blog.css'
import { Link } from "react-router-dom";

const Blog = (props) => {
    const logout =()=>{
        localStorage.clear()
    }

    return (
    
    <div className="page-container-blog">
        <div className="bg-blog"></div>
        <div className="content-container-blog">
            <div className="navbar-blog">
                <div className="brand-blog">GreenifyMe</div>
                <div className="links-blog">
                    <Link to="/explore">EXPLORE</Link>
                    <Link to="/logout" onClick={logout} >LOGOUT</Link>
                </div>
            </div>

            <div className="main-content">
                <h1 className="main-title">Blogs for {props.name}</h1>
            </div>
            
            {/* Cards Section */}
            <div class="cards">
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                                <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                410
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                            <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                400
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/16776159/pexels-photo-16776159/free-photo-of-water-around-rocks-on-shore.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                                <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                350
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/17676464/pexels-photo-17676464/free-photo-of-a-house-on-a-hill-between-trees-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                                <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                301
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                                <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                289
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
                <main class="grid">
                    <div class="card">
                        <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=300" class="card-image" height="300" width="300" />
                        <div class="card-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec ante arcu, auctor nec eleifend eget, vulputate id lectus. Suspendisse sit amet luctus nulla. 
                                Pellentesque in dolor ac nibh facilisis facilisis. Vivamus convallis a purus eu convallis.
                            </p>
                        </div>
                        <div class="card-info"> 
                            <div>
                                <FontAwesomeIcon className='i' icon={faThumbsUp} />
                                220
                            </div>
                            <div>
                                <a href="#" class="card-link">View Article</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>


            </div>
        <div className="footer-blog">
            Made with <FontAwesomeIcon icon={faHeart} bounce
            style={{color: '#f02c0a',}} /> by Kalyani
        </div>
    </div>
  )
}

export default Blog