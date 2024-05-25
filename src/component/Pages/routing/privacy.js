import React from 'react';
import logo from '../images/net-removebg-preview.png'
import '../MYCSS/privacy.css'
import { AiOutlineCaretDown } from "react-icons/ai"

function App(){
    return(
        <div>
        <nav>
            <div className="right">
                <img src={logo} alt="netflix logo"/>
                <h2>Help Center</h2>                
            </div>

            <div className="left">
                <h5 className="leaveme">Help Topics</h5> <AiOutlineCaretDown className="hidden"/>
                    <button className="btn">Join Netflix</button>
                    <button className="btn-danger">Sign in</button>
            </div>
        </nav>
        <div></div>
        </div>
    )
}

export default App