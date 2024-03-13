import navValues from "@/helpers/navValues";
import Banner from "./banner";
import HouseList from "./houseList";
import React, { useCallback, useState } from "react";
import ComponentPicker from "./componentPicker";
const navigationContext=React.createContext(navValues.home);

const App=()=>
{
    const navigate=useCallback((navTo,param)=>
    {
        setNav({current:navTo,param,navigate});
    },[])

    const[nav,setNav]=useState({current:navValues.home,navigate})
    return(
        <navigationContext.Provider value={nav}>
      <div>
<Banner/>
<ComponentPicker currentNavLocation={nav.current} />
        </div>
        </navigationContext.Provider>
  
    )
}
export {navigationContext}
export default App;