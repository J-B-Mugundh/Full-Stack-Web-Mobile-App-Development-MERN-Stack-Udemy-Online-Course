import React from 'react'
import north from './images/NorthernHemisphere.jpg'
import south from './images/SouthernHemisphere.jpg'
import './Hemisphere.css'

const HemisphereConfig = {
    Northern : {
        text : 'It is Northern Hemisphere',
        picture: north
    },
    Southern : {
        text : 'It is Southern Hemisphere',
        picture: south
    }
}
const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = HemisphereConfig[hemisphere];
    return(
        <div className = {hemisphere}>
            <div className = 'ui raised text container segment'>
                <div className = 'image'>
                    <img src = {picture} alt = "hemisphere_picture" />
                </div>
                <div className = 'ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;