const TaskModel = require('../models/TaskModel');
module.exports = async (req, res) => {
	const {id} = req.params;
	const {type} = req.query;
	let tasks;
	if(type==='project')
		tasks = await TaskModel.find({project: id});
	else
		tasks = await TaskModel.find({managerID: id});
    res.json(tasks);
}
