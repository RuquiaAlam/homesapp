import navValues from "@/helpers/navValues";
import House from "./house";

const { default: HouseList } = require("./houseList");

const ComponentPicker=({currentNavLocation})=>
{
switch(currentNavLocation)
{
case navValues.home : 
return <HouseList/>;
case navValues.house : 
return <House/>;

}

}
export default ComponentPicker;