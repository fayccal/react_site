import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { SiC, SiCplusplus, SiPython, SiRust, SiJava, SiJavascript, SiOpengl, SiGit, SiAndroidstudio} from "react-icons/si"
const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);

    return (
        <div>
            <h1 className="MargeSide titleFont" id="skills">Skills</h1>
            <p className="MargeSide" data-aos="fade-up">My main abilities are in computer programming.</p>
            <p className="MargeSide" data-aos="fade-up">Those are the programming languages that I have experienced.</p>

            <div data-aos="fade-up" className="MargeSide equalSize">
                <div className="fbase"><SiC color="darkturquoise" /></div>
                <div className="fbase"><SiCplusplus color="blue" /></div>
                <div className="fbase"><SiPython color="dodgerblue" /></div>
                <div className="fbase"><SiRust color="saddlebrown" /></div>
                <div className="fbase"><SiJava color="red" /></div>
                <div className="fbase"><SiJavascript color="yellow" /></div>
                
            </div>

            <div data-aos="fade-up" className="MargeSide equalSize">
                    <div className="fsolo">C</div>
                    <div className="fsolo">C++</div>
                    <div className="fsolo">Python</div>
                    <div className="fsolo">Rust</div>
                    <div className="fsolo">Java</div>
                    <div className="fsolo">JavaScript</div>
            </div>

            {/*<div data-aos="fade-up" className="MargeSide equalSize alpos">
                <div className="fbase"><SiOpengl color="grey" /></div>
                <div className="fbase"><SiAndroidstudio color="green" /></div>
                <div className="fbase"><SiGit color="orange" /></div>
                
            </div>

            <div data-aos="fade-up" className="MargeSide equalSize">
                    <div className="fsolo">OpenGL</div>
                    <div className="fsolo">Android Studio</div>
                    <div className="fsolo">Git</div>

            </div>*/}
        </div>
        
    );
}

export default Skills