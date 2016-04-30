import { createStore } from 'redux';
import todoApp from './js/reducer';
import '../static/css/style';


var App = ( _ => {
	var initState = localStorage.state ? JSON.parse(localStorage.state) : {};
	var store = createStore(todoApp, initState);
	var unsubscribe = store.subscribe(render);

	function render() {
		var state = store.getState();
		var doneNum = 0; 
		var yetNum = 0;
		// update list 
		$('#listWrap ul').html('');
		state.tasks.forEach((val, i) => {
			if(val.isDone) {
				doneNum ++;
			} else {
				yetNum ++;
			}
			$('#listWrap ul').append(
				`<li data-taskID=${val.id} class="list-group-item task">
					<span class="taskStatus ${!val.isDone ? 'yet' : ''}"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></span>
					${val.text}
					<span class="glyphicon glyphicon-remove btn-delTask pull-right" aria-hidden="true"></span>
				</li>`
			);
		});

		// update count 
		$('#statusWrap').find('.doneNum').text(doneNum);
		$('#statusWrap').find('.yetNum').text(yetNum);
	}

	return {
		render, 
		unsubscribe, 
		store
	}
})();

App.render();
