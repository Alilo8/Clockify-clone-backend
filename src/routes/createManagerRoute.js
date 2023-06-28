const ManagerModel = require('../models/ManagerModel');

module.exports = async (req, res) => {
    const {_id, name, email, password} = req.body;

    const result = await ManagerModel.create({
        _id: _id,
        name: name,
        email: email,
        password: password,
        task_id: 0,
        task_start: 0,
        task_time: 0
    }).catch((err) => {
        console.log('Duplicate')
    });
    res.json(result);
};