module.exports = function(router) {
	var kanbanCardCtrl = require('../controllers/kanban.card.controller');

	router.route('/api/cards')
		.get(kanbanCardCtrl.list)
		.post(kanbanCardCtrl.create)
		.delete(kanbanCardCtrl.removeAll);

	router.route('/api/cards/:card_id')
		.get(kanbanCardCtrl.read)
		.put(kanbanCardCtrl.update)
		.delete(kanbanCardCtrl.remove);

	var kanbanTaskCtrl = require('../controllers/kanban.task.controller');

	router.route('/api/cards/:card_id/tasks')
		.post(kanbanTaskCtrl.create);

	router.route('/api/cards/:card_id/tasks/:task_id')
		.put(kanbanTaskCtrl.update)
		.delete(kanbanTaskCtrl.remove);

	var kanbanAppCtrl = require('../controllers/kanban.app.controller');

	router.route('/')
		.get(kanbanAppCtrl.render)
};