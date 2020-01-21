import React from 'react';
const Filters =(props)=>{
    console.log(props)
    const {value, specie}= props.valueInput;
    const handleSearchInput =(event)=>{
        props.handleSearchInput(event.target.value, event.target.name)
    }
    
    return(
        <form  className="form__search">
            <input className="input__search" onChange={handleSearchInput} type="seach" name="filterValue" value={value}/>
            <div className="select__radio">
                <input onChange={handleSearchInput} className="radio__input" id="human" type="radio" value="human" name="specie" checked={specie==='human'}/>
                <label className="radio__label" htmlFor="human">Humano</label>
                <input onChange={handleSearchInput} className="radio__input" id="alien" type="radio" value="alien" name="specie" checked={specie=== 'alien'}/>
                <label className="radio__label" htmlFor="alien">Alien</label>
                <input onChange={handleSearchInput} className="radio__input" id="all" type="radio" value="all" name="specie" checked={specie=== 'all'}/>
                <label className="radio__label" htmlFor="all">All</label>
            </div>
        </form>
    )
}



export default Filters;