import React, {useEffect} from 'react'
import Typed from 'react-typed'
import Particles from 'react-tsparticles'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Upper = () => {
    
    return(
        <div className="MargeSide" /*style={{backgroundImage:"url("+ anim +")", backgroundSize: "cover", height: "100vh",}}*/>
                        {/*<img src={anim} alt="" width="100%" height="100%"/>*/}
                        <div className='particlejs'>
                            <h1>Hi!</h1>
                            <span className="preTitle">I'm </span>
                            <h1 className="NameBig">BOUNIT Faycal</h1>
                            <p className='animated_text'>
                                <Typed
                                    strings={[
                                        'I am a Student',
                                        'I am a Developer',
                                        'I am a Critical Thinker',
                                        "And a friendly guy :)",
                                        ]}
                                        typeSpeed={40}
                                        backSpeed={50}
                                        loop></Typed>
                            </p>
                            </div>

                        <Particles 	 params={{
                        particles: {

                            number: {
                                value: 50,
                            },
                            size: {
                                value: 2,
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outMode: 'bounce',
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'grab',
                                },
                            },
                        },
                    }}/>
                       
        </div>
    );
}

export default Upper