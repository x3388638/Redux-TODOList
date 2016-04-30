import { combineReducers } from 'redux';

function tasks(state = [], action) {
	switch (action.type) {
		case 'ADD_TASK':
			return [
				...state, 
				{
					id: action.data.id, 
					text: action.data.text, 
					isDone: false
				}
			];
		case 'UPDATE_TASK':
			return state.map((val, i) => {
				if(val.id == action.data.id) {
					return Object.assign({}, val, {
						isDone: action.data.isDone
					});
				}
			});
		default: 
			return state;
	}
}

const todo = combineReducers({
	tasks
});

export default todo;
