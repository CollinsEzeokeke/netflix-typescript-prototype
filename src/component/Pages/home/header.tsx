import logo from "../../images/netlogo.png"
import '../../MYCSS/net.css'
import { AiFillCaretRight } from "react-icons/ai"
  
function App() {
    return (
        <div className="flex">
        <img src={logo} className="img" />
        <div className="middle">
            <h1>Unlimited movies, TV <br/>shows, and more.</h1>
            <h2> Watch anywhere. Cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="line">
            <input type="email" placeholder="Email Address"/> <button style={{fontSize: '20px'}}>Get Started <AiFillCaretRight style={{height: '20px', top: '2.5px', position:'relative' }}/></button>
            </div>
        </div>
        <div className="signup">
            <button>Sign In</button>
        </div>
        </div>
    );
}

export default App