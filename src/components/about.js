import React, {useEffect} from 'react'
import Typed from 'react-typed'
import Particles from 'react-tsparticles'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../css/about.css'
import '../css/border.scss'
import '../css/font.css'
import {IconContext} from "react-icons"
import {BiNetworkChart, BiCodeAlt, BiCode} from "react-icons/bi"
import { SiC, SiCplusplus, SiPython, SiRust, SiJava, SiReact, SiJavascript, SiGit} from "react-icons/si"
import {TiDeviceDesktop} from "react-icons/ti"
import {MdDeveloperBoard} from "react-icons/md"
//import {IoNavigate, IoBulb} from "react-icons/io5"
import tfe from "../file/2048.png"
import Cbook from "../file/Cbook.png"
import mcq from "../file/mcq.png"
/*
import {GrNetwork} from "react-icons/gr"
import {GiCardRandom} from "react-icons/gi"
import {TiDeviceDesktop} from "react-icons/ti"
import {RiContactsBookFill} from "react-icons/ri"
*/



//class About extends React.Component

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);
    
    //render() {

        let res = "30%";
        
        return(
            <IconContext.Provider value={{}}>
                <div>
                    {/* JUST UN ESPACE NOIR ET FAIRE UN TERMINAL*/}
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
                                        "But most important of all i'm a genius",
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

                    <div data-aos="fade-right">
                    <h1 className="MargeSide titleFont" id="about">About me</h1>
                    <p className="MargeSide">I'm a student in his second year of computer science at college in France. </p>
                    <p className="MargeSide">I am trying to improve daily my skills, knowledge and social behaviours with others people because
                     i think it is the way to become a better human, but of course rest is always appreciated. </p>
                    <p className="MargeSide">I have also great interest in the domains of Nutrition and muscle developpement.</p>
                    </div>
                    
                    <h1 className="MargeSide titleFont" id="skills">Skills</h1>

                    <p className="MargeSide">Those are the programming languages that i have experienced.</p>

                    {/*<table className="MargeSide">
                        <tbody className="equalSize">
                        <tr className="fbase">
                            <td><SiC /></td>
                            <td><SiCplusplus /></td>
                            <td><SiPython /></td>
                            <td><SiRust /></td>
                            <td><SiJava /></td>
                        </tr>
                        </tbody>
                    </table>*/}

                    {/*regarder icomoon */}
                    <div data-aos="fade-up" className="MargeSide equalSize">
                        <div className="fbase"><SiC color="darkturquoise" /></div>
                        <div className="fbase"><SiCplusplus color="blue" /></div>
                        <div className="fbase"><SiPython color="dodgerblue" /></div>
                        <div className="fbase"><SiRust color="saddlebrown" /></div>
                        <div className="fbase"><SiJava color="red" /></div>
                        <div className="fbase"><SiJavascript color="yellow" /></div>
                        {/*<div className="fbase"><SiGit color="orange" /></div>*/}
                        
                    </div>

                    <div data-aos="fade-up" className="MargeSide equalSize">
                            <div className="fsolo">C</div>
                            <div className="fsolo">C++</div>
                            <div className="fsolo">Python</div>
                            <div className="fsolo">Rust</div>
                            <div className="fsolo">Java</div>
                            <div className="fsolo">Javascript</div>
                        </div>


                    <h1 data-aos="fade-right" className="MargeSide titleFont" id="worked">Worked on</h1>
                    {/*<table className="MargeSide equalSize">
                        <tbody>
                            <tr>
                                <td>
                                    
                                    <div className="XP">
                                    <p > <BiNetworkChart size="4em" className="rounded" style={{border: '3px solid' }} /></p>
                                    <h2>Network</h2>
                                    <p className="gradient-border">I have some experience in network developement using system calls and thread.</p>
                                    </div>

                                </td>
                                <td>
                                <div className="XP">
                                    <p> <MdDeveloperBoard size="4em" className="rounded"  style={{border: '3px solid'}}/></p>
                                    <h2>GUI</h2>
                                    <p>I made some GUI application and games using many librairies:</p>
                                    <ul className="toleft">
                                        <li>GTK</li>
                                        <li>SDL2</li>
                                        <li>Java swing</li>
                                        <li>GL4D</li>
                                    </ul>
                                </div> 
                                </td>

                                <td>
                                <div className="XP">
                                    <p> <BiCodeAlt size="4em" className="rounded"  style={{border: '3px solid'}}/></p>
                                    <h2>Web developement</h2>
                                    <p>i have also been making web developement with Javascript, HTML, CSS and Reactjs</p>
                                </div> 
                                </td>
                                
                            </tr>
                        </tbody>
                        </table>*/}

                        <div data-aos="fade-up" className="MargeSide equalSize">
                        <div className="XP gradient-borderS">
                                    <p > <BiNetworkChart /*size="4em"*/ className="rounded fexp" color="blueviolet"/*color="deepskyblue" style={{border: '3px solid' }}*/ /></p>
                                    <h2 className="coloronly">Network</h2>
                                    <p className="gradient-border">I have some experience in network developement using system calls and thread.</p>
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
                                    <h2 className="coloronly">Web developement</h2>
                                    <p>i have also been making web developement with Javascript, HTML, CSS and ReactJS.</p>
                                </div> 
                        </div>




                    <div data-aos="fade-right">
                        <h1 className="MargeSide titleFont" id="project">Projects</h1>
                        <p className="MargeSide">you can found most of my projects on my github page.</p>
                        <p className="MargeSide">This is some of the projects that i made: </p>
                    </div>
    
                    <div data-aos="fade-up" className="MargeSide flexVerti">

                        <div className="Project oflow gradient-borderS">

                            <div className="fleft">
                                <img src={mcq} alt="" className="rounded" width={res} height={res}/>
                                <h2 className="">MCQ randomizer</h2>
                            </div>

                            <div className="cpos">
                                <p className="fontS">A MCQ randomizer that i made using rust programming language with some librairies.</p>
                            </div>

                        </div>

                        <div className="Project oflow gradient-borderS">   

                            <div className="fleft">     
                                <img src={Cbook} alt="" className="rounded" width={res} height={res}/>
                                <h2>Contact book</h2>
                            </div>

                            <div className="cpos">
                                <p className="fontS">This is a GTK contact book made in C and using the GTK librairie and glade for the GUI.</p>
                            </div>
                        </div>  


                        <div className="Project oflow gradient-borderS">

                            <div className="fleft">
                                <img src={tfe} alt="" className="rounded" width={res} height={res}/>
                                <h2>2048 game</h2>
                            </div>
                            
                            <div className="cpos">
                                <p className="fontS">A classic 2048 game in java with java swing.</p>
                            </div>
                        </div> 

                        {/*<div className="Project oflow">
                            <div className="fleft">
                                <p> <SiReact size="8em" className="rounded" color="cornflowerblue"/></p>
                                <h2>Reactjs portfolio</h2>
                            </div>

                            <div>
                                <p className="fontS">The react portfolio that you are on actually structured with reactJS Javascript, JSX and CSS.</p>
                            </div>
                    </div> */}
                    </div>

                    <div data-aos="fade" style={{marginBottom:"60px"}}>
                        <h1 className="MargeSide titleFont cpos">Contact</h1>
                        <p  className="MargeSide cpos">If you want to discuss with me about a topic, my inbox is always open to you.</p>
                        <h2 className="MargeSide cpos">b.fayccal@gmail.com</h2>
                    </div>
                    {/*<p className="MargeSide XP"> XP personal fazfezgz fa fzgfg rgb rg</p>*/}
                </div>
            </IconContext.Provider>
        );
    //}
}

export default About


/*                                    {/*<div className="XPUP">
                                    <p> <GrNetwork size="3em"/></p>
                                    </div>

                                    <div className="XPDOWN">

                                    </div>*/

                                    /*<p className="XPUP"> <GrNetwork size="3em"/></p>
                                    <p className="XPDOWN"></p>*/

                                    /*<p className="XP"> <GrNetwork size="3em"/></p>
                                    
                                    
                                                        <table className="MargeSide">
                        <tbody>
                            <tr>
                                <td>
                                <div className="XP">
                    
                                    <img src={mcq} alt="" className="rounded" width="40%" height="40%"/>
                                    <h2>MCQ randomizer</h2>
                                </div> 
                                </td>

                                <td>
                                <div className="XP">
                                
                                    <img src={Cbook} alt="" className="rounded" width="40%" height="40%"/>
                                    <h2>Contact book</h2>
                                </div> 
                                </td>
                                <td>
                                <div className="XP">
                                    <img src={tfe} alt="" className="rounded" width="40%" height="40%"/>
                                    <h2>2048 game</h2>
                                </div> 
                                </td>

                                <td>
                                <div className="XP">
                                    <p> <SiReact size="4em" className="rounded" color="cornflowerblue"/></p>
                                    <h2>Reactjs portfolio</h2>
                                </div> 
                                </td>
                            </tr>
                        </tbody>
                    </table>*/