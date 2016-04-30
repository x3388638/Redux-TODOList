var TaskInput = (_ => {
	var _store;
	var $inputWrap;

	function init(store) {
		_cacheDOM();
		_bindEvent();
		_store = store;
	}

	function _cacheDOM() {
		$inputWrap = $('#addTaskWrap');
	}

	function _bindEvent() {
		$inputWrap
			.off('click.addTask')
			.on('click.addTask', '#btn-addTask', _handleAddTask)
	}

	function _handleAddTask() {
		var text = $inputWrap.find('#addTaskInput').val();
		if(text) {
			_store.dispatch({
				type: 'ADD_TASK', 
				data: {
					id: Date.now(), 
					text
				}
			})
		}
	}

	return {
		init
	}
})();

export default TaskInput;
