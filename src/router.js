const express = require('express');

const router = express.Router();

router.get('/task/:id', require('./routes/readTaskRoute'));
router.post('/task', require('./routes/createTaskRoute'));
router.delete('/task/:id', require('./routes/deleteTaskRoute'));
router.put('/task/:id', require('./routes/updateTaskRoute'));

router.get('/project/:id', require('./routes/readProjectRoute'));
router.get('/project/:managerid', require('./routes/readProjectRoute'));
router.post('/project', require('./routes/createProjectRoute'));

router.get('/client', require('./routes/readClientRoute'));
router.post('/client', require('./routes/createClientRoute'));

router.get('/manager/:email', require('./routes/readManagerRoute'));
router.post('/manager', require('./routes/createManagerRoute'));
router.put('/manager/:id', require('./routes/updateManagerRoute'));



module.exports = router;
