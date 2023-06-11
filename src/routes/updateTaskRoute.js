const TaskModel = require('../models/TaskModel');

module.exports = async (req, res) => {
    const {id} = req.params;
    const {text, project} = req.body;
    let update = await TaskModel.updateOne({_id: id}, {$set: {text: text, project: project}});
    res.status(204).json(update);
}
