const TaskModel = require('../models/TaskModel')
const ProjectModel = require('../models/ProjectModel')

module.exports = async (req, res) => {
    const {text, time, project, assignedTo} = req.body;
    let update
    if(project)
	    update = await ProjectModel.updateOne({_id: project}, [{$set: {time: {$add: ["$time", time]}}}]);
	
	update = await TaskModel.updateOne({text: text, project: project}, [{$set: {time: {$add: ["$time", time]}}}]);
	if(!update.modifiedCount){
		update = await TaskModel.create({
			text: text, 
			time: time, 
			project: project,
			assignedTo: assignedTo
		}).catch((err) => {
		})
		if(project)
			update = await ProjectModel.updateOne({_id: project}, {$push: { tasks: update._id }})
	}
	console.log(update)
    res.json(update);
};
