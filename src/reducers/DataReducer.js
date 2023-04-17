import { ADD_DATA, DELETE_DATA, EDIT_DATA } from "../constants/ActionTypes";

const initialState = [];

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case DELETE_DATA:
      return state.filter((item) => item.id !== action.payload);
    case EDIT_DATA:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload.data : item
      );
    default:
      return state;
  }
}
