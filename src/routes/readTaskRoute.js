const TaskModel = require('../models/TaskModel');
module.exports = async (req, res) => {
	const {id} = req.params;
	let tasks;
	if(id)
		tasks = await TaskModel.find({_id: { $in: id.split(',')}});
	else
		tasks = await TaskModel.find();

    res.json(tasks);
}
