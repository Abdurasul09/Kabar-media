import api from "../../helpers/consts";
import {GET_CONTACTS} from "../types";

export const contactsAction = () => {
    return async (dispatch) => {
        try {

            const res = await api.get('api/v1/contacts/')
            dispatch({type: GET_CONTACTS, payload: res.data})
        } catch (e) {
            console.log(e)
        }
    }
}