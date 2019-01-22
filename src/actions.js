import  { CHANGE_SEARCH_FIELD} from './constant.js';

// action setSearchField takes an action of text and returns an object of type and payoad below
export const setSearchField = (text)  => ({
    type: CHANGE_SEARCH_FIELD,
    // payload is the data sent to the reducer which here is what the user enters
    payload: text
})