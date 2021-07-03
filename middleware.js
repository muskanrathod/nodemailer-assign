const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();

app.use(bodyParser.json());

app.post('/add/user', [
  check('username').isEmail(),
  check('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.send('user saved');
});

app.listen(3000, () => console.log('server started'));