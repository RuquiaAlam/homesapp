import { useContext } from "react";
import { navigationContext } from "./app";
import currencyFormatter from "@/helpers/currencyFormatter";
import {Img} from "./house.module.css"
const House=()=>
{

    const {param:house}=useContext(navigationContext);

    return(
        <div className="row mb-2">
<div className="col-6">
    <div className="row">
    <img src={ house.photo}  className={Img} alt="pic"></img>
    </div>
    
</div>
<div className="col-6">
    <h5 className="themeFontColor">{house.country}</h5>
    <h4>{house.address}</h4>
    <p>{house.description}</p>
    <h4 className="themeFontColor">{currencyFormatter.format(house.price)}</h4>
</div>
    

        </div>
    )
}
export default House;