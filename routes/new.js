const express = require('express');
const router = express.Router();
const messages = require('../messages');

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('form', { title: 'Mini Messageboard' });
});

// POST
router.post('/', function (req, res) {
  const newMsg = req.body;
  messages.push({ user: newMsg.author, text: newMsg.msg, added: new Date() });
  res.redirect('/');
});
module.exports = router;
