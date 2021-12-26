import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import tfe from "../file/2048.png"
import Cbook from "../file/Cbook.png"
import mcq from "../file/mcq.png"
import renable from "../file/android_renable.png"
import fighter from "../file/university_fighter.png"
import { gitPage } from './sidebar'

const Project = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);

    let res = "30%";

    return(
        <div>
            <div data-aos="fade-right">
                <h1 className="MargeSide titleFont" id="project">Projects</h1>
                <p className="MargeSide">You can found most of my projects on my <a href={gitPage}>Github page</a>.</p>
                <p className="MargeSide">This is some of the projects that i made: </p>
            </div>

            <div data-aos="fade-up" className="MargeSide flexVerti">

                <div className="Project oflow gradient-borderS">

                        <div className="fleft">
                            <img src={renable} alt="" className="rounded" width={res} height={res}/>
                            <h2>Android Renable</h2>
                        </div>

                        <div className="cpos">
                            <p className="fontS">An Android application made in Java to help deaf and mute people to communicate easily.</p>
                        </div>
                    </div> 

                    <div className="Project oflow gradient-borderS">

                        <div className="fleft">
                            <img src={fighter} alt="" className="rounded" width={res} height={res}/>
                            <h2>University fighter</h2>
                        </div>

                        <div className="cpos">
                            <p className="fontS">A fully incremental street fighter game made in vanilla JavaScript.</p>
                        </div>
                    </div> 

                    <div className="Project oflow gradient-borderS">

                        <div className="fleft">
                            <img src={mcq} alt="" className="rounded" width={res} height={res}/>
                            <h2 className="">MCQ randomizer</h2>
                        </div>

                        <div className="cpos">
                            <p className="fontS">A MCQ randomizer that i made using Rust programming language.</p>
                        </div>

                    </div>

                    <div className="Project oflow gradient-borderS">   

                        <div className="fleft">     
                            <img src={Cbook} alt="" className="rounded" width={res} height={res}/>
                            <h2>Contact book</h2>
                        </div>

                        <div className="cpos">
                            <p className="fontS">This is a GTK contact book made in C with the GTK librairie and glade for the GUI.</p>
                        </div>
                    </div>  
            </div>
        </div>
    );
}

export default Project