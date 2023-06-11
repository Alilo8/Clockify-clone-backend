const TaskModel = require('../models/TaskModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const task = await TaskModel.findOneAndDelete({_id: id});
    res.status(204).json(task);
}
