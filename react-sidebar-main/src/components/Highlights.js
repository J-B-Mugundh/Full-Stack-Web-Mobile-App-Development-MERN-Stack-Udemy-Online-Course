import React from 'react';
import Marquee from 'react-fast-marquee';

function Highlights() {
  return (
    <div className="App" style={{paddingBottom: '2rem', marginBottom: '2rem'}}>

      <div className="title">
        <h1>COLLEGE HIGHLIGHTS</h1>
      </div>
      
      <div className="college highlights" style={{ display: 'flex',flexWrap: 'wrap' }}>
        <Marquee direction="left" speed={80} delay={0} >
          <div className="image_wrapper">
            <img src="https://mitindia.edu/images/resized/images/mit/college_higlights/mitafest_130_130.jpg" alt="" />
            <h4 style={{marginBottom: '2 rem'}}>Mitafest</h4>
          </div>
        </Marquee>

      </div>

    </div>
  );
}

export default Highlights;