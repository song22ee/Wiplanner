const CHANGE_TITLE = 'CHANGE_TITLE';

function changeTitle(title) {
	return {
		type: CHANGE_TITLE,
		payload: title,
	};
}

const action = changeTitle('todo제목');
