const ClientModel = require('../models/ClientModel')

module.exports = async (req, res) => {
    const {_id} = req.body;
    
    const result = await ClientModel.create({
	    _id: _id,
	}).catch((err) => {
		console.log('Duplicate')
	})
    res.json(result);
};
