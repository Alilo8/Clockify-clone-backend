const ProjectModel = require('../models/ProjectModel');
module.exports = async (req, res) => {
	const {id} = req.params;
	const {type} = req.query;
	let projects;
	if(type==='single')
	    projects = await ProjectModel.findOne({_id: id});
	else
		projects = await ProjectModel.find({managerID: id});
    res.json(projects);
}
