export const addData = (value) => ({
    type: 'ADD_DATA',
    payload: value,
});

export const deleteData = (index) => ({
    type: 'DELETE_DATA',
    payload: index,
});

export const editData = (index, value) => ({
    type: 'EDIT_DATA',
    payload: { index, value },
});

// export const fetchData = () => {
//     return (dispatch) => {
//         setTimeout(() => {
//             const fetchedData = ['Data 1', 'Data 2', 'Data 3'];
//             dispatch({ type: 'FETCH_DATA', payload: fetchedData });
//         }, 2000); // Meniru waktu tunggu 2 detik
//     };
// };

export const fetchData = () => ({
    type: 'FETCH_DATA_REQUEST',
});
