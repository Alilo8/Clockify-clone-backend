const ProjectModel = require('../models/ProjectModel')

module.exports = async (req, res) => {
    const {_id, client, access} = req.body;
    const result = await ProjectModel.create({
	    _id: _id,
	    status: 'Active',
	    client: client,
	    access: access,
	    time: new Date().setUTCHours(0, 0, 0, 0),
	    favorite: false
	}).catch((err) => {
		console.log('Duplicate');
	})
    res.json(result);
};
