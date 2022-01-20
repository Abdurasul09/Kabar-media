import api from "../../helpers/consts";
import { GET_CATEGORIES } from "../types";

export const categoriesAction=()=>{
    return async (dispatch)=>{
        try{
     const res=await api.get('api/v1/categories')
     dispatch({type:GET_CATEGORIES,payload:res.data})
        }catch(e){
            console.log(e);
        }
    }
}