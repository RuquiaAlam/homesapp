
import {useContext} from "react";
import {logo,subTitleStyle} from "./banner.module.css" 
import {navigationContext} from "./app"

import navValues from "../helpers/navValues"
const Banner=()=>
{
    const{navigate}=useContext(navigationContext);

    return(
      
<header className="row mb-2">
<div className="col-5   ">
    <img src="./GloboLogo.png" alt="logo" className={logo} onClick={()=>navigate(navValues.home)}/>
</div>
<div className="col-7 themeFontColor mt-4">
    <div className={subTitleStyle}>Providing houses all over the world!</div>
</div>
</header>
        
    )
}
export default Banner;