import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { emailAdr } from './sidebar'

const Contact = () => {
    
    useEffect(() => {
        Aos.init({ duration: 2000, once:true });
    }, []);
    
    return(
        <div data-aos="fade" style={{marginBottom:"60px"}}>
        <h1 className="MargeSide titleFont cpos">Contact</h1>
        <p  className="MargeSide cpos">If you want to discuss with me about a topic, my inbox is always open to you.</p>
        <h2 className="MargeSide cpos">{emailAdr}</h2>
        </div>
    );
}

export default Contact