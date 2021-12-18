import { DATA_ERR, DATA_SUCESS, DATA_LOADING } from "./ActionTypes";
import axios from "axios";
export const DataErr = (err) => ({
    type: DATA_ERR,
    payload: err,
});

export const DataLoading = () => ({
    type: DATA_LOADING,
});

export const DataSucess = (data) => ({
    type: DATA_SUCESS,
    payload: data,
});

export const getData = () => async(dispatch) => {
    dispatch(DataLoading());
    try {
        const { data } = await axios.get("http://localhost:2233/aha/ahaOriginals");
        dispatch(DataSucess(data));
    } catch (err) {
        dispatch(DataErr(err));
    }
};