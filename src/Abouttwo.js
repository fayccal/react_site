import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Abouttwo = () => {

    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);

    return(
        <div data-aos="fade-right">
        <h1 className="MargeSide titleFont" id="about">About me</h1>
        <p className="MargeSide">I'm a student in his third year of computer science at Paris 8 in France. </p>
        <p className="MargeSide">I am trying to improve daily my skills, knowledge and social behaviours with other people because
         i think it is the way to become a better person, but of course rest is always appreciated. </p>
        <p className="MargeSide">I also have interest in the domains of nutrition, muscle development and games.</p>
        </div>
    );
}

export default Abouttwo