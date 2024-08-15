const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

const messageListGet = asyncHandler(async (req, res) => {
  const messages = await db.getMessages();
  res.render('index', {
    title: 'Home',
    messages: messages,
  });
});

const messageCreateGet = asyncHandler(async (req, res) => {
  res.render('form', {
    title: 'Add post',
  });
});

const messageCreatePost = asyncHandler(async (req, res) => {
  const { username, comment } = req.body;
  await db.insertMessages(username, comment);
  res.redirect('/');
});

module.exports = {
  messageListGet,
  messageCreateGet,
  messageCreatePost,
};
