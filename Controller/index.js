const router = require('express').Router();
const thoughtApi = require('./api/thoughts.js');
const userApi = require('./api/users.js');

router.use('/thoughts', thoughtApi);
router.use('/users', userApi);

module.exports = router;