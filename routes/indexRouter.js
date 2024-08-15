const { Router } = require('express');
const messageController = require('../controllers/messageController');

const indexRouter = Router();

indexRouter.get('/', messageController.messageListGet);
indexRouter.get('/new', messageController.messageCreateGet);
indexRouter.post('/new', messageController.messageCreatePost);

module.exports = indexRouter;
