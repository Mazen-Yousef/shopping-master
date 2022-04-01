import React from "react";
import "../../css/Header/Header.css";
import Bounce from 'react-reveal/Bounce';
import { words } from "../../words";


function Header (){

    return(
        <Bounce left cascade text>
            <header>
            {words.headerTitle}
            </header>
        </Bounce>
    )


}
export default Header