import { useCallback, useState } from "react";
import loadingStatus from "../helpers/loadingStatus"

const useGetRequest=(url)=>
{
const [loadingState,setLoadingState]=useState(loadingStatus.isLoading);

const get = useCallback(async ()=>{
    setLoadingState(loadingStatus.isLoading);

try{
    const resp= await fetch(url);
    const result=await resp.json();
    setLoadingState(loadingStatus.loaded);
    return result;
}
catch{
    setLoadingState(loadingStatus.hasErrored);

}
   

},[url])
return {get,loadingState}

}
export default useGetRequest;
