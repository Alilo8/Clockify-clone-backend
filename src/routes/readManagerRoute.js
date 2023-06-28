const ManagerModel = require('../models/ManagerModel');
module.exports = async (req, res) => {
    const {email} = req.params;
    const {type} = req.query;
    let manager;
    if(type==='email')
        manager = await ManagerModel.findOne({email});
    else
        manager = await ManagerModel.findOne({_id: email});

    res.json(manager);
}