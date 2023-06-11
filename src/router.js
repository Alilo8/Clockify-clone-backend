const express = require('express');

const router = express.Router();

router.get('/task', require('./routes/readTaskRoute'));
router.post('/task', require('./routes/createTaskRoute'));
router.delete('/task/:id', require('./routes/deleteTaskRoute'));
router.put('/task/:id', require('./routes/updateTaskRoute'));

router.get('/project', require('./routes/readProjectRoute'));
router.get('/project/:id', require('./routes/readProjectRoute'));
router.post('/project', require('./routes/createProjectRoute'));

router.get('/client', require('./routes/readClientRoute'));
router.post('/client', require('./routes/createClientRoute'));

module.exports = router;
