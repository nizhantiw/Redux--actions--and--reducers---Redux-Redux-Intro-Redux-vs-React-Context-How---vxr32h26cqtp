/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:
const reducer = (state = [],action = {}) => {
  switch(action.type){
    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;
    default: 
      return state;
    }
  
export default reducer;
*/
import { combineReducers } from "redux";
import { LOGIN_USER, LOGOUT_USER } from "../actions";

const initialState = {
  loggedIn: false,
  username: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        username: ""
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
