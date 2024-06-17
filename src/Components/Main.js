import React from 'react';
import dp from '../images/dp_black.jpg'
//import dp from '../images/dp_pencil.jpg'

import './Main.css'
import About from './About';

class Main extends React.Component{
    render(){
        return(
            <div className='main-container'>
                <div className='profile'>
                    <div className='profile-header'>
                        <h1 className='name'>Ganesh Mallela</h1>
                        <p className='role'>Full stack Developer</p>
                        <p className='description'>I have honed my skills in developing, deploying, 
                            and maintaining comprehensive healthcare applications that improve patient
                            outcomes and streamline operations.
                        </p>
                    </div>
                    <img className='photo' src={dp} alt='photo' />
                </div>
                <button className='say-hello-btn'>Say Hello <i class="bi bi-send"></i></button>
                <About />
            </div>
        )
    }
}

export default Main;