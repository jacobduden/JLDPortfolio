import React from 'react';
import Card from '../utils/card'
import WorkDay from '../images/WorkDayScheduler.png'
import NoteTaker from '../images/NoteTaker.png'
import TravelBlogger from '../images/TravelBlogger.png'
import WeatherDashboard from '../images/WeatherDashboard.png'
import WhenToFly from '../images/WhenToFly.png'
const Portfolio = (props) => {
const portfolioInfo = [
    {
        name: 'Work Day Scheduler',
        discription: 'A simple to-do list that can be edited, and entires can be deleted. All inputs are saved to local storage.',
        image: WorkDay,
        link: 'test',
        repo: 'test'
    },
    {
        name: 'Note Taker',
        discription: 'A small application that allows the user to take notes, update, and delete them.',
        image: NoteTaker,
        link: 'test',
        repo: 'test'
    },
    {
        name: 'Travel Blogger',
        discription: 'A blog sight that allows users to post about recent adventures they have embarked.',
        image: TravelBlogger,
        link: 'https://serene-tor-80949.herokuapp.com/',
        repo: 'https://github.com/Chrispruiz/Travel-Blogger'
    },
    {
        name: 'Weather Dashboard',
        discription: 'Api website that allows you to look up any city name and see the weather conditions. All search history is stored on the side.',
        image: WeatherDashboard,
        link: 'test',
        repo: 'test'
    },
    {
        name: 'When to Fly',
        discription: 'Api website dedicated to helping new drone fliers determine the best day to fly their drone by checking weather conditions and location.',
        image: WhenToFly,
        link: 'test',
        repo: 'test'
    },
    {
        name: 'test',
        discription: 'test',
        image: 'test',
        link: 'test',
        repo: 'test'
    }
]
return(
    <div className='container'>
       <div className='row portWrap'>
           {portfolioInfo.map(portInfo =>{
               return (portfolioInfo.indexOf(portInfo),
               <Card key={portfolioInfo.name} portInfo={portInfo}></Card>)
           })}
           </div> 
    </div>
)

}

export default Portfolio;