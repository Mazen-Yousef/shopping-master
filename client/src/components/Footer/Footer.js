import React from "react";
import "../../css/Footer/Footer.css";
import { staticWords } from "../../staticWords";
import Zoom from 'react-reveal/Zoom';

function Footer (){
    return(
       <Zoom left cascade text><footer>
          {staticWords.foterTitle}
        </footer></Zoom> 
    )
}

export default Footer 