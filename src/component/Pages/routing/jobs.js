import React from 'react';
import '../MYCSS/job.css'
import { AiOutlineCaretDown } from "react-icons/ai"
import logo from '../images/netlogo.png'
import responsibility from '../images/Web-7187.jpg'
import reed from '../images/reed.jpg'

function App () {
    return(
        <div>
            <header className='header-1'>
                <div className='top-header'>
                    <div className='left'><img src={logo} alt="Netflix" className='pic'/><h3>JOBS</h3></div>  

                    <div className='right'>
                        <a>TEAMS</a>
                        <a>LOCATIONS</a>
                        <a>WEARNETFLIX</a><AiOutlineCaretDown/>
                        <a>Search Jobs</a>
                    </div> 
                </div> 
                <div className='bottom'>
                    <div className='main-bottom'>
                        <h1>
                            A great workplace combines exceptional <br/>colleagues and hard problems.
                        </h1>
                        <div className='search-box'>
                            <input type="search" className='input' placeholder='Search jobs by keyword'/>
                        </div>
                    </div>
                </div>   
            </header>

            <div className='card-1'>
                <div className='left-card'>
                    <div className='left-card-content'>
                        <div className='heading'>
                            <h1>Freedom and Responsibility</h1>
                        </div>
                        <div className='card-content'>
                            <p>Our core philosophy is people over process. Our culture has been instrumental to our sucess and has helped us attract and retain stunning colleagues, making work here more satisfying.</p>
                        </div>
                        <div className='link'>
                            <button className='text-uppercase'>read about our culture</button>
                        </div>
                    </div>
                </div>
                <div className='right-card'>
                    <img src={responsibility}/>
                </div>
            </div>
            <div className='card-2'>
                <div className='card-2-left'>
                    <img src={reed} className='reed'/>
                </div>
                <div className='card-2-right'>
                    <div className='heading'>
                        Streaming entertainment. Global original content. Product personalization.
                    </div>
                    <div className='card-content'>
                        Our first original series debutedin 2013. Over the following decades,Streaming TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience. 
                    </div>
                    <div className='link'>
                        <button className='text-uppercase'>see what's next</button>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default App