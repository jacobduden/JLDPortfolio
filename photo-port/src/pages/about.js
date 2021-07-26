import React from 'react';
import Image from '../images/Homework2.jpg'
const AboutMe =()=>{
    return(
       <div className='container abt-me-box'>
           <h1 className="about-me name">About me</h1>
           <div className="row">
           <img className="profilepic col-md-6" src={Image}/>
           
           <h5 className="bio col-md-6">    I am a UT student, formally from Phoenix, Arizona, studying full stack web developement.
       I come from a family of engineers, and pilots in the airforce. Innovation was always a common thread
       in my upbringing. At an early age, I was introduced to rebuilding engines for performance gains on vehicles for offroad,
       and street racing. I am in the proccess of taking a 1984 Toyota Cressida commuter car, and transforming it into
       a Chevy V8 swapped dift comp car. From building my dream car, to building my dream computer, I've always had the sense
       that if I'm not building something, then I'm not growing as a person. When my father introduced me to vanilla JavaScript, 
       I was hooked from there. there were an endless possiblity of projects to be made and problems to solve. I got accepted at UT's
       coding bootcamp which has made me acknowlege my ability to excel under immense amounts of pressure. </h5>
       </div> 
       </div>
    )
}

export default AboutMe;