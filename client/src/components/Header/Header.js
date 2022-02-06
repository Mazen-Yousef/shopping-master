import React from "react";
import "../../css/Header/Header.css";
import { staticWords } from "../../staticWords";

function Header (){

    return(
        <header>
         {staticWords.headerTitle}
        </header>
    )


}
export default Header