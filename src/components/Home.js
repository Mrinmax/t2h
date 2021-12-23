import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
    return (
        <div className = "container">
            <h1>Text to Handwriting
                <Link to="/login"><button>LOGIN</button></Link>
            </h1>
            <img src="login.svg" alt="" />
        </div>
        
    )
}

export default Home;
