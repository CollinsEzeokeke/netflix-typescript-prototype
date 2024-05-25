import React from 'react';
import logo from "../images/netlogo.png"
import pic from "../images/pix.jpg"
import pix from "../images/pix.png"
import pricing from "../images/hd.png"
import gt from "../images/gt.png"
    function App() {
        return (
            <div 
            style={{
                backgroundColor: 'white', color: 'black',overflow: 'hidden',
            }}
            >
                <div style={{
                    display: 'flex',
                    backgroundColor: 'black',
                    width: '100%',
                    justifyContent: 'space-between',
                    height: '100px',
                    marginBottom:'20px',
                    alignItems:'center',
    

                    }}>
                        <div style={{
                    display: 'flex',
                    alignItems:'center',
                    marginLeft:'20px',

                    }}>
                    <div>
                        <img src={logo} style={{width: '120px',}}/>
                    </div>
                    <h2 style={{borderLeft: '2px solid white',color: 'white', marginLeft:'5px',}}><i style={{marginLeft: '5px'}}></i>Help Center</h2>
                    </div>
                    <div style={{marginRight: '20px'}}>
                        <button style={{backgroundColor: 'transparent',border: '2px solid white',height: '45px', color: 'white', marginRight: '20px',borderRadius: '5px'}}>JOIN NETFLIX</button>
                        <button style={{backgroundColor: 'red',border: 'none',height: '45px', color: 'white',borderRadius: '5px'}}>SIGN IN</button>
                    </div>
                </div>
               <div style={{width:'100%',justifyContent: 'center',marginLeft: '30px'}}>
                   <div><i style={{fontStyle: 'normal',color: 'red',fontSize: '15px'}}>Back to Help Home</i></div>
                    <div><h2 style={{fontSize: '40px',fontStyle: 'normal',fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}>What is Netflix?</h2></div>
               </div> 
               <div
               style={{display: 'flex',width: '100%',justifyContent: 'space-evenly',marginBottom: '50px'}}
               >
               <div style={{width:'100%',marginLeft: '30px'}}>  
            <img src={pic} style={{width:'105%',height: '100%'}}/>
            </div>
                  <div style={{alignItems: 'center',display: 'flex',flexDirection: 'column', justifyContent: 'flex-start',alignItems: 'center', width: '50%',}}>  
                    <h4 style={{display: 'flex',justifySelf: 'flex-start',width: '65%',marginLeft: '30px'}}>Suggested Articles</h4>
                    
                    <ul>
                        <li  style={{marginBottom: '10px'}}>Getting started with Netflix</li>
                        <li  style={{marginBottom: '10px'}}>Billing and Payments</li>
                        <li  style={{marginBottom: '10px'}}>Netflix Gift Cards</li>
                        <li  style={{marginBottom: '10px'}}>Can't sign in to Netflix</li>
                        <li  style={{marginBottom: '10px'}}>How to create and edit profiles</li>
                    </ul>
               </div>
               </div>
               <div style={{display: 'flex',width: '70%',marginLeft: '30px',flexDirection: 'column'}}>
                   <p>Netflix is a subscription-based <i style={{color: 'red',fontStyle: 'normal',}}>streaming service</i> that allows our members to watch TV shows and movies without commercials on an internet-connected device.</p>

                   <p>You can also <i style={{color: 'red',fontStyle: 'normal',}}>download TV shows and movies </i>toyour iOS, Android, or Windows 10 device and watch without an internet connection.</p>

                   <p>if you're already a member and would like to learn more about using Netflix, visit <i style={{color: 'red',fontStyle: 'normal',}}>Getting started with Netflix.</i></p>
               </div>
               {/* division mark */}
               <div style={{width: '75%',marginLeft: '30px',marginTop :'50px',marginBottom: '50px'}}>
                    <hr />
               </div>
               <div style={{marginLeft: '30px',width: '100%'}}>
                   <div>
                       <h2>TV Shows & Movies</h2>
                   </div>

                   <div>
                       <img src={pix} style={{width:'75%',height: '100%'}}/>
                   </div>
                   
               {/* division mark */}
               <div style={{width: '75%',marginTop :'50px',marginBottom: '50px'}}>
                    <hr />
               </div>

               <div style={{display: 'flex',flexDirection: 'column'}}>
                   <p>Netflix content varies by region and may change over time. You can watch from a wide variety of <i style={{color :'red',fontStyle: 'normal',}}>award-<br/>winning Netflix Originals, TV shows, movies, documentaries, and more.</i></p>

                   <p>The more you watch, the better Netflix gets at <i style={{color :'red',fontStyle: 'normal'}}>recommending</i> TV shows and movies we think you'll enjoy.</p>
               </div>

                  
               {/* division mark */}
               <div style={{width: '75%',marginTop :'50px',marginBottom: '50px'}}>
                    <hr />
               </div>

               <h2 style={{marginBottom: '50px'}}>Supported Devices</h2>
               <h2>Some supported Netflix devices shown from top down</h2>
               </div>
               <div style={{width: '75%',marginLeft: '30px'}}>
                   <p>You can watch Netflix through any <i style={{color: 'red',fontStyle: 'normal'}}>internet-connected device</i> that offers the Netflix app, including smart TV's, gameconsoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix <br />on your computer using an internet browser. You can review the <i style={{color: 'red',fontStyle: 'normal'}}>system requirements</i> for web browser compatibility,and check our <i style={{color: 'red',fontStyle: 'normal',}}>internet speed recommendations</i> to achieve the best performance.</p>

                   <p>Need help getting set up? search our <i style={{color :'red',fontStyle: 'normal'}}>Help Center</i> for the manufacturer of the device you are using.</p>

                   <div style={{borderLeft: '5px solid silver',display: 'flex',flexDirection: 'row',height: '60px',marginBottom: '50px',alignItems: 'flex-end'}}>
                       <div style={{display: 'flex',flexDirection:'column',justifyContent: 'flex-start',marginLeft: '30px',height: '50px'}}> <p style={{marginTop: '-10px',fontSize: '15px'}}>
                    <i style={{fontSize: '20px', fontWeight: 'bolder',fontStyle: 'normal'}}>NOTE: </i>The Netflix app may come pre-loaded on certain devices, or you may need to download onto your device</p>
                    
                    <p style={{marginTop: '-10px',fontSize: '15px'}}>Netflix app may differ between devices.</p>

                    </div>
                   </div>
               </div>
            <div style={{width: '100%',marginLeft: '30px'}}>

               {/* division mark */}
               <div style={{width: '75%',marginTop :'70px',marginBottom: '50px'}}>
                    <hr />
               </div>

                    <div>
                        <h2>Plans and Pricing</h2>
                    </div>

                    <div>
                        <img src={pricing} style={{width:'75%'}}/>
                    </div>

                    <div style={{width: '75%'}}>
                        <p>Each Netflix plan determines the number of devices you can watch Netflix on <b>at the same time </b>and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).</p>

                        <p><i style={{color: 'red',fontStyle: 'normal'}}>Compare our plans and pricing</i> to decide which one is right for you. You can easily <i style={{color: 'red',fontStyle: 'normal'}}>change your <br/>plan</i> or <i style={{color: 'red',fontStyle: 'normal'}}>cancel</i> online at any time.</p>
                    </div>

                    
               {/* division mark */}
               <div style={{width: '75%',marginTop :'50px',marginBottom: '50px'}}>
                    <hr />
               </div>

               <div>
                   <h2>Get Started!</h2>
               </div>

               <div>
                   <img src={gt}  style={{width:'75%'}}/>
                   <p>Follow these easy steps to start watching Netflix today:</p>
               </div>

               <div>
                   <ol style={{marginLeft: '-10px'}}>
                       <li style={{marginBottom: '10px'}}>Visit <i style={{color: 'red',fontStyle: 'normal'}}>netflix.com/signup.</i></li>
                       <li style={{marginBottom: '10px'}}><i style={{color: 'red',fontStyle: 'normal'}}>Choose the plan </i>that's right for you.</li>
                       <li style={{marginBottom: '10px'}}>Create an account by entering your email address and creating a password.</li>
                       <li style={{marginBottom: '10px'}}>Enter a <i style={{color: 'red',fontStyle: 'normal'}}>payment method.</i> As a Netflix member, you are charged once a month on the date you signed up.</li>
                   </ol>
                   <p>That's it. Enjoy Netflix!</p>
               </div>

                {/* division mark */}
                <div style={{width: '75%',marginTop :'50px',marginBottom: '10px'}}>
                    <hr />
               </div>

               <div style={{display: 'flex',marginTop: '50px',marginBottom: '50px',}}>

                    <p>Was the article helpful?</p>
                    
                    <div style={{marginLeft: '20px', display: 'flex',alignItems :'center',width :'20%'}}>
                         <button style={{backgroundColor: 'transparent',border: '2px solid red',height: '45px', color: 'red', marginRight: '20px',width : '40%',height: '80%'}}>YES</button>
                         <button style={{backgroundColor: 'transparent',border: '2px solid red',height: '45px', color: 'red', marginRight: '20px',width : '40%',height: '80%'}}>NO</button>
                    </div>
                </div>
            </div>

                <div style={{backgroundColor: 'silver',height: '50%',display: 'flex',justifyContent: 'space-between'}}>
                    <div style={{marginLeft: '30px',backgroundColor: 'transparent'}}>
                    <h2>Want to contact us?</h2>
                    </div>

                    <div style={{display: 'flex',width: '40%',justifyContent: 'center',alignItems: 'center'}}>
                        <button style={{border: '1px solid black',height: '45px', color: 'black', marginRight: '20px',width : '25%',height: '60%'}}><b>CALL US</b></button>
                        <button style={{border: '1px solid black',height: '45px', color: 'black', marginRight: '-60px',width : '35%',height: '60%',marginLeft: '10px'}}><b>START LIVE CHAT</b></button>
                    </div>
                </div>
            <footer  style={{backgroundColor: 'rgb(44, 42, 42)',display: 'flex',justifyContent: 'space-between',height: '30vh',width: '100%'}}>
                    <div style={{display: 'flex',alignItems: 'center',width: '50%',marginLeft: '30px',height: '50%',}}>
                        <button style={{color: 'whitesmoke',width :'40%',backgroundColor: 'transparent',border: '1px solid silver',display: 'flex',justifyContent: 'space-between',height: '50%',alignItems: 'center',color: 'silver',}}>ENGLISH</button>
                    </div>
                    <div style={{width: '50%',height: '50%',display: 'flex',alignItems: 'center'}}>
                        <a href="#" style={{color: 'silver',textDecoration: 'none',marginRight: '20px'}}>Terms of Use</a>
                        <a href="#" style={{color: 'silver',textDecoration: 'none',marginRight: '20px'}}>Privacy</a>
                        <a href="#" style={{color: 'silver',textDecoration: 'none',marginRight: '20px'}}>Cookie Preferences</a>
                        <a href="#" style={{color: 'silver',textDecoration: 'none',marginRight: '20px'}}>Corporate Information</a>
                    </div>
            </footer>
        </div>
        )
    }

export default App