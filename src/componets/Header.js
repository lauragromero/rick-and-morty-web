import React from 'react';
import Rick_and_Morty_logo from '../images/Rick_and_Morty_logo.png';
import portalrick from '../images/portalrick.png';

const Header=()=>{
    return(
        <div className="header">
            <img className="header__logo" src={Rick_and_Morty_logo} alt="Rick and Morty"/>
            <img className="header__img" src={portalrick} alt="portal"/>

        </div>
    )
}

export default Header;