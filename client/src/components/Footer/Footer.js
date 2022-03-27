import React from "react";
import "../../css/Footer/Footer.css";
import { staticWords } from "../../staticWords";
import Zoom from 'react-reveal/Zoom';

function Footer (){
    return(
       <footer><Zoom left cascade text>
          {staticWords.foterTitle}</Zoom> 
        </footer>
    )
}

export default Footer 