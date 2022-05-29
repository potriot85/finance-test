import io from 'socket.io-client';

const SET_DATA = "financeTest/data/SET_DATA";

let initState = {
    data: [],
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {...state, data: action.data}
        }
        default:
            return state;
    }
}

export const setData = (data) => ({ type: SET_DATA, data });

export const getData = () => {
    return async (dispatch) => {
            const socket = io.connect('http://localhost:4000');
            socket.emit('start');
            socket.on('ticker', function (response) {
                dispatch(setData(response));
            return response
            });
    }
}

export default dataReducer;