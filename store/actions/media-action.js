import {GET_MEDIA} from "../types";
import api from "../../helpers/consts";

export  const mediaAction=()=>{
    return async (dispatch)=>{
        try{
            const res=await api.get("api/v1/medias/")
            dispatch({type:GET_MEDIA, payload:res.data})
        }catch (e){
            console.log(e)
        }
    }
}