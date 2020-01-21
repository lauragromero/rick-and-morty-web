import React from 'react';
import {Link} from 'react-router-dom';
import rip from '../images/rip.png'


 const CharacterDetail =(props)=>{
    const matchID = props.characteres.filter(item => parseInt(props.characterDetail) === item.id)
     return(
        <div className="card__detail-container">
            {matchID.map(item=>{
                return(
                    <div  className="card__container" key={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <div className="card__text">
                            <div className="card__title">
                                <h2>{item.name}</h2>
                                <div className="card__status">{item.status === 'Dead'? <img src={rip} alt={item.status}/>: ''}</div>
                            </div>
                            <span>Especie: {item.species}</span>
                            <span>Estatus: {item.status}</span>
                            <span>Origen: {item.origin.name}</span>
                            <span>Episodios: {item.episode.length}</span>
                        </div>
                    </div>
                    
                )
            })} 
             <Link className="btn__return" to="/"><i className="fas fa-angle-left"></i> Volver</Link>  
        </div>
     )
 }

export default CharacterDetail;