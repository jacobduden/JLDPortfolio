import React from 'react';

const Card = (props)=>{
return(
    <div className='col-md-5 card' key={props.portInfo.name}>
        <img src={props.portInfo.image} className='card-img-top'></img>
        <div className='card-body'>
        <h5 className='card-title'>{props.portInfo.name}</h5>
        <p className='card-text'>{props.portInfo.discription}</p>
        <a href={props.portInfo.link} className='btn btn-primary'><img src="https://img.icons8.com/ios/32/000000/domain.png"/></a>
        <a href={props.portInfo.repo} className='btn btn-primary'><img src="https://img.icons8.com/ios-glyphs/32/000000/github.png"/></a>
    </div>
    </div>
)
}

export default Card;