const ClientModel = require('../models/ClientModel');
module.exports = async (req, res) => {
    const clients = await ClientModel.find();
    res.json(clients);
}
