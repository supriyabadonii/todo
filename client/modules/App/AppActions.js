import callApi from '../../util/apiCaller';
import { browserHistory } from 'react-router';

// Export Constants
export const SAVED_TODO = 'SAVED_TODO';

export function toggleAddPost(data){

	return (dispatch) => {
    return callApi('todo', 'post', {
      tododata: {
        todo: data.todovalue,
        },
    }).then(res => dispatch(TodoStatus(res)));
  };
}


export function TodoStatus(response){
	
	if(response.status){
		return {
			type: SAVED_TODO,
			status: response.status,
			data: response.data,
			message : response.message,
			error : []
		};
	}else if(response.error){
		return {
				type: SAVED_TODO,
				status: response.status,
				data: {},
				message : '',
				error : [response.error]
			};
		
	}else{
		return {
			type: SAVED_TODO,
			status: response.status,
			data: {},
			message : '',
			error : ['Internal server error']
		};
	}
}