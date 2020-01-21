import React from 'react';

const CharacterCard =(props)=>{
    const {image, name, specie, gender, status} = props
    return(
        <React.Fragment>
            <img className="character__img" src={image} alt={name}/>
            <div className="character__container">
                <div className="character__text-container">
                    <h3 className="character__title">{name}</h3>
                    <span className="character__text">{specie}</span>
                </div>
                <div className="character__icon">
                    <span>{specie==='Alien'? <i className="fab fa-reddit-alien"></i>: gender === 'Male'? <i className="fas fa-male"></i> : <i className="fas fa-female"></i>}</span>
                    <span className="status__container">{status === 'Dead'? <i className="far fa-dizzy"></i> : status === 'unknown'?<i className="fas fa-question"></i>:<i className="fas fa-heartbeat"></i> }</span>
                </div>
            </div>
        </React.Fragment>
    )
}


export default CharacterCard;