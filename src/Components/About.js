import React from 'react'
import './About.css';
import photo from '../images/dp_black.jpg'

class About extends React.Component{
    render(){
        return(
            <div className='about-container'>
                {/* <div className='horizontal-line'></div> */}
                <div className='about-header'>
                    <h2>About Me</h2>
                    <p>My Intro</p>
                </div>
                <div className='personal-details'>
                    <div className='img-div'><
                        img className='my-photo' src={photo} alt='myPhoto'/>
                    </div>
                    <div className='cards'>
                        <div className='all-cards'>                            
                            <div className="card">
                                    <i class="bi bi-briefcase"></i>
                                    <h3>Experience</h3>
                                    <p>1+ years</p>
                            </div>
                            <div className="card">
                                <i class="bi bi-laptop"></i>
                                <h3>Work</h3>
                                <p>Healthcare IT</p>
                            </div>
                            <div className="card">
                                <i class="bi bi-check2-circle"></i>
                                <h3>Availability</h3>
                                <p>freelance projects</p>
                            </div>
                        </div>
                        <div className='info'>Full Stack Developer proficient in Java, ReactJS, Spring Boot, Docker, Jenkins, and MySQL. Expertise in developing complex healthcare apps</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About;