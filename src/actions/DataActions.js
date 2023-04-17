import {
    ADD_DATA,
    DELETE_DATA,
    EDIT_DATA,
  } from "../constants/ActionTypes";
  
  export const addDataRequest = (data) => ({
    type: ADD_DATA,
    payload: data,
  });
  
  export const deleteDataRequest = (id) => ({
    type: DELETE_DATA,
    payload: id,
  });
  
  export const editDataRequest = (id, data) => ({
    type: EDIT_DATA,
    payload: { id, data },
  });
  