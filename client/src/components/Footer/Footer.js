import React from "react";
import "../../css/Footer/Footer.css";
import Zoom from 'react-reveal/Zoom';
import { words } from "../../words";

function Footer (){
    return(
       <footer><Zoom left cascade text>
          {words.foterTitle}</Zoom> 
        </footer>
    )
}

export default Footer 