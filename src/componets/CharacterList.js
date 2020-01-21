import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const CharacterList =(props)=>{
    const searchValue = props.valueSearch.toLowerCase();
    const filterSpecies = props.filterSpecie;
    console.log(props)
    const findCharacter = props.characteres.filter(character=>  filterSpecies === 'human'? character.species.toLowerCase().includes(filterSpecies): filterSpecies === 'alien'? character.species.toLowerCase().includes(filterSpecies): filterSpecies === 'all' ?character: character)
    .filter(character=> searchValue === '' || character.name.toLowerCase().includes(searchValue))
    .map((character)=>{
        return(
            <li  className="character__list" key={character.id}>
                <Link to={`/character/${character.id}`}>
                    <CharacterCard
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    specie={character.species}
                    gender={character.gender}
                    status={character.status}
                    value={searchValue}
                    found={character}
                    />
                 </Link>
            </li>  
        )
    })
    
    return(
        <ul className="characteres__container">
            {findCharacter.length === 0 && searchValue !== ''? <div className="container__notfound"><p>Personaje no encontrado</p><img src="https://media.giphy.com/media/4pjKt6jfT6Z7W/giphy.gif" alt="no encontrado"/></div>:findCharacter}
        </ul>
    )
}

CharacterCard.propTypes = {
    name:PropTypes.string,
    specie: PropTypes.string, 
    id:PropTypes.number, 
    gender:PropTypes.string,
    status:PropTypes.string,
  }
export default CharacterList;