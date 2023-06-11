const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({
	_id: String,
});

const ClientModel = mongoose.model('Client', ClientSchema);

module.exports = ClientModel;
