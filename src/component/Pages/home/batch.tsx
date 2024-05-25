import React from 'react';
import '../../MYCSS/batch.css';
import { X } from 'lucide-react'
// import Clame from '../../images/tv.png';
import Carousel from '../../caorusel';
import Mobile from '../../images/mobile-0819.jpg';
import Kids from '../../images/download.png';
import Caro from '../../images/img.jpeg'
import CaroOne from '../../images/img1.jpeg'
import CaroTwo from '../../images/img2.jpeg'
import CaroThree from '../../images/img3.jpeg'
import CaroFour from '../../images/img4.jpeg'

const Batch: React.FC = () => {
    const images = [
        Caro,
        CaroOne,
        CaroTwo,
        CaroThree,
        CaroFour,
    ];

    const values = [
        'What is Netflix',
        'How much does Netflix cost?',
        'Where can I watch?',
        'How do I cancel',
        'What can I watch on Netflix?',
        'Is Netflix good for kids?'
    ];
    return (
        <div>
            <div className="content">
                <div style={{ marginLeft: '30px' }}>
                    <h1 className="none">Enjoy your TV.</h1>
                    <h3>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</h3>
                </div>
                <div>
                    <Carousel images={images}/>
                </div>
            </div>

            <div className="content2">
                <div>
                    <img src={Mobile} alt='Mobile' />
                    <div style={{ display: 'flex', width: '100%', height: '100px', justifyContent: 'center', marginTop: '-10%' }}>
                        <div className="image">
                            <h3>Stranger things</h3>
                        </div>
                    </div>
                </div>

                <div style={{ marginLeft: '30px' }}>
                    <h1 style={{ fontSize: '50px' }}>Download your shows to watch offline.</h1>
                    <h3>Save your favourites easily and always have something to watch.</h3>
                </div>
            </div>

            <div className="content3">
                <div>
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
            </div>

            <div className="content2">
                <div>
                    <img src={Kids} alt='Kids' />
                </div>

                <div style={{ marginRight: '10px' }}>
                    <h1 style={{ fontSize: '50px' }}>Create profiles for kids.</h1>
                    <h3 className="folly">Send kids on adventures with their favourite characters in a space made just for them--- free with your membership.</h3>
                </div>
            </div>

            <div className="new">
                <h1>Frequently Asked Questions</h1>
                {values.map((value, index) => {
                   return <div className='card' style={{ marginTop: '15px' }} key={index}><a href='#'>{value}</a> <X size={28} strokeWidth={3} /></div>
                })}


                {/* <div className="card" style={{ marginTop: '15px' }}><a href="../netflix/Pages/faq.js">How much does Netflix cost?</a></div>
                <div className="card" style={{ marginTop: '15px' }}><a href="../netflix/Pages/faq.js">Where can I watch?</a></div>
                <div className="card" style={{ marginTop: '15px' }}><a href="../netflix/Pages/faq.js">How do I cancel</a></div>
                <div className="card" style={{ marginTop: '15px' }}><a href="../netflix/Pages/faq.js">What can I watch on Netflix?</a></div>
                <div className="card" style={{ marginTop: '15px' }}><a href="../netflix/Pages/faq.js">Is Netflix good for kids?</a></div> */}

                <p style={{ marginTop: '100px' }}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="line">
                    <input type="email" placeholder="Email Address" /> <button>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Batch;
