const TaskModel = require('../models/TaskModel');
const ProjectModel = require('../models/ProjectModel')

module.exports = async (req, res) => {
    const {id} = req.params;
    const {text, project, time, run} = req.body;
    console.log(typeof(time))
    let update
    update = await TaskModel.updateOne({_id: id}, {$set: {text: text, project: project, time:time, run: run}});
    if(project){
    	// const total = await TaskModel.aggregate([{$group: {_id:null, totalTime: { $sum: '$time' }}}])
      const total = await TaskModel.aggregate([{$match: {project: project}},
      {
        $group: {
          _id: null,
          totalTime: {$sum: '$time'}
        }
      }])
      console.log(total)
	    update = await ProjectModel.updateOne({_id: project}, {time: total[0].totalTime});
	  }
    res.status(204).json(update);
}
