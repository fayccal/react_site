import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {TiDeviceDesktop, TiDevicePhone} from "react-icons/ti"
import {BiNetworkChart, BiCodeAlt, BiCode} from "react-icons/bi"

const WorkOn = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);

    return(
        <div>
            <h1 data-aos="fade-right" className="MargeSide titleFont" id="worked">Worked on</h1>

            <div data-aos="fade-up" className="MargeSide equalSize">
                    <div className="XP gradient-borderS">
                        <p > <BiNetworkChart /*size="4em"*/ className="rounded fexp" color="blueviolet"/*color="deepskyblue" style={{border: '3px solid' }}*/ /></p>
                        <h2 className="coloronly">Network</h2>
                        <p className="gradient-border">I have some experience in network development using system calls and thread.</p>
                    </div>

                <div className="XP gradient-borderS">
                    <p> <TiDeviceDesktop /*size="4em"*/ className="fexp" color="blueviolet"/*color="gold" style={{border: '3px solid'}}*/ /></p>
                    <h2 className="coloronly">GUI</h2>
                    <p>I made some GUI application and games using many librairies:</p>
                    <ul className="toleft">
                        <li>GTK</li>
                        <li>SDL2</li>
                        <li>Java swing</li>
                        <li>GL4D</li>
                    </ul>
                </div> 

                <div className="XP gradient-borderS">
                    <p> <BiCodeAlt /*size="4em"*/ className="rounded fexp" color="blueviolet"/*color="mediumspringgreen" style={{border: '3px solid'}}*/ /></p>
                    <h2 className="coloronly">Web development</h2>
                    <p>I have also been making web development with JavaScript, HTML, CSS and ReactJS.</p>
                </div> 

                <div className="XP gradient-borderS">
                    <p> <TiDevicePhone /*size="4em"*/ className="rounded fexp" color="blueviolet"/*color="mediumspringgreen" style={{border: '3px solid'}}*/ /></p>
                    <h2 className="coloronly">Mobile development</h2>
                    <p>I used Android studio and Java to create mobile applications.</p>
                </div> 
            </div>
        </div>
    );
}

export default WorkOn