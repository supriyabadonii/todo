// Import Actions
import { SAVED_TODO } from './AppActions';

// Initial State
const initialState = {
	data: {},
	status:false,
	error:[],
  	
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_TODO:
        return Object.assign({}, state, { data : action.data, success : action.message, error : action.error });
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Export Reducer
export default AppReducer;
