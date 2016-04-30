var TodoList = (_ => {
	var _store, $listWrap;

	function _cacheDOM() {
		$listWrap = $('#listWrap');
	}

	function _bindEvent() {
		$listWrap
			.off('click.delTask')
			.on('click.delTask', '.btn-delTask', _handleDelTask)
	}

	function init(store) {
		_cacheDOM();
		_bindEvent();
		_store = store;
	}

	function _handleDelTask() {
		var id = $(this).parent('.task').attr('data-taskid');
		_store.dispatch({
			type: 'DELETE_TASK', 
			data: {
				id
			}
		});
	}

	return {
		init
	}
})();

export default TodoList;
