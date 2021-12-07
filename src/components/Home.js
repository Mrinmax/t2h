
import React from 'react';

function Home() {
    const imgStyle = {marginLeft:"800px"}
    const textStyle = {width:"45%", marginLeft:"90px", textAlign:"center", display:"flex", margiBottom:""}
    return (
        <div className="home">
             <img src="login.svg" alt=""  height="600" width="600" style={imgStyle}/>
            
            <h1 style={textStyle}>Text to Handwriting</h1>
            
        </div>
        
    )
};


export default Home;
