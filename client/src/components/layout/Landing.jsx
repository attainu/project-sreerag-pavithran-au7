import React from 'react';
import LeftImage from '../../img/undraw_Work_time_re_hdyv (1).svg';
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <div className="main-container">
            <div className="left-main">
                <img src={LeftImage} alt="Left-Team" />
            </div>
            <div className="right-main">
                <h1>Make & Connect with Top developers in the world!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis velit corrupti voluptates nemo omnis non explicabo vel hic rem aperiam natus, molestiae ad cupiditate aut ullam a, unde impedit!</p>
                <div className="button-area">
                    <Link to="/register" className="btn-register">Register</Link>
                    <Link to="/login" className="btn-login" style={{marginLeft: "15px"}}>Login</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Landing
