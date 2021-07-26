import React from 'react';
import Photo from '../images/Resume.png'
const Resume = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='resumeWrap'>
                        <h1 className='contact'>Skills</h1>
                        <br></br>
                        <h4>HTML</h4>
                        <h4>CSS and frameworks</h4>
                        <h4>React.js</h4>
                        <h4>HandleBars.js</h4>
                        <h4>Regex</h4>
                        <h4>MySQL and NoSQL</h4>
                        <h4>GraphQL</h4>
                        <h4>Express.js</h4>
                        <h4>Node.js</h4>
                        <h4>Passport.js</h4>
                        <a href={Photo} download><img src="https://img.icons8.com/material-outlined/24/000000/download--v1.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume