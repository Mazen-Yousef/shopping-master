import React from "react";
import "../../css/Header/Header.css";
import { staticWords } from "../../staticWords";
import Bounce from 'react-reveal/Bounce';


function Header (){

    return(
        <Bounce left cascade text>
            <header>
            {staticWords.headerTitle}
            </header>
        </Bounce>
    )


}
export default Header