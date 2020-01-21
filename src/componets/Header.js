import React from 'react';
import Rick_and_Morty_logo from '../images/Rick_and_Morty_logo.png';
import portalrick from '../images/portalrick.png';

const Header=()=>{
    return(
        <div className="header">
            <div className="header__logo"><img  src={Rick_and_Morty_logo} alt="Rick and Morty"/></div>
            <div className="header__img"> <img src={portalrick} alt="portal"/></div>
            
            

        </div>
    )
}

export default Header;