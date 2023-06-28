const ManagerModel = require('../models/ManagerModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const {task_id, task_start, task_time} = req.body;
    const update = await ManagerModel.updateOne({_id: id}, {task_id, task_start, task_time});
    res.status(204).json(update);
}
