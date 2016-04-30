import Redux from 'redux';
import todo from './reducer';
import '../static/css/style';


$(document).ready(_ => {
	let initState = JSON.parse(localStorage.state)
	let store = Reduc.createStore(todo, initState);
});	