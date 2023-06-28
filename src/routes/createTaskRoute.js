const TaskModel = require('../models/TaskModel')
const ProjectModel = require('../models/ProjectModel')

module.exports = async (req, res) => {
    const {text, time, project, due, assignedTo, managerID} = req.body;	
	const count = await TaskModel.count();
	let update = await TaskModel.create({
		_id: count+1,
		text: text, 
		time: time, 
		project: project,
		due: due,
		assignedTo: assignedTo,
		run: false,
		managerID: managerID,
	}).catch((err) => {
	})

	if(project)
		update = await ProjectModel.updateOne({_id: project}, {$push: { tasks: update._id }})

    res.json(update);
};
