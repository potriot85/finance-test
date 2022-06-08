import io from "socket.io-client";
let socket = io.connect("http://localhost:4000");
const SET_DATA = "financeTest/data/SET_DATA";
const SET_TIME_UPDATE = "financeTest/data/SET_TIME_UPDATE";

let initState = {
  data: [],
  timeUpdate: 5000,
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA: {
      return { ...state, data: action.data };
    }
    case SET_TIME_UPDATE: {
      return { ...state, timeUpdate: action.timeUpdate };
    }
    default:
      return state;
  }
};

export const setData = (data) => ({ type: SET_DATA, data });
export const setTimeUpdate = (timeUpdate) => ({
  type: SET_TIME_UPDATE,
  timeUpdate,
});

export const getData = (timeUpdate) => {
  return (dispatch) => {
    if (timeUpdate > 5000) {
      socket.disconnect(true);
      socket = io.connect("http://localhost:4000");
    }
    socket.emit("start", timeUpdate);
    socket.on("ticker", function (response) {
      dispatch(setData(response));
    });
  };
};

export default dataReducer;
