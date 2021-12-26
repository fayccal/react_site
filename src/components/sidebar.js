import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../css/sidebar.css'
import '../css/border.scss'
import { FaGithub } from "react-icons/fa"
import Face from "../file/jodog.png"

let gitPage = "https://github.com/fayccal";
let emailAdr = "b.faycalPro@gmail.com";
export {gitPage, emailAdr};


//class Sidebar extends React.Component
const Sidebar = () => {
    //render() {

        return (
            <div>
                <nav className="rainbow">
                    <div className="bloqueur">
                    <h1 className="myName">BOUNIT Faycal</h1>
                        <div className="myIMG">
                            <img src={Face} alt="" className="myFace" width="90%" height="90%"/>
                        </div>
                    <h3 className="myEmail">{emailAdr}</h3>

                        <ul>
                            <li><a href={gitPage}><FaGithub size="2em" className="githubIcon"/></a></li>
                            <li><AnchorLink href="#about"> About me </AnchorLink></li>
                            <li><AnchorLink href="#skills"> Skills </AnchorLink></li>
                            <li><AnchorLink href="#worked"> Worked on </AnchorLink></li>
                            <li><AnchorLink href="#project"> Projects </AnchorLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    //}
}

export default Sidebar