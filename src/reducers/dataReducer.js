const initialState = {
    data: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return { ...state, data: [...state.data, action.payload] };
        case 'DELETE_DATA':
            return {
                ...state,
                data: state.data.filter((_, index) => index !== action.payload),
            };
        case 'EDIT_DATA':
            const newData = [...state.data];
            newData[action.payload.index] = action.payload.value;
            return { ...state, data: newData };
        case 'FETCH_DATA':
            return { ...state, data: action.payload };
        case 'FETCH_DATA_SUCCESS':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
