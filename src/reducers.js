  import { CHANGE_SEARCH_FIELD } from './constant.js';

  const initialState = {
      searchField: ''
  }
  //Creating a reducer
  export const searchRobots = (state=initialState, action={}) => {
      switch(action.type) {
          case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
          default: 
            return state;
      }
  }
