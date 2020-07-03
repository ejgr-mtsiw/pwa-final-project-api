const express = require('express');
const router = express.Router();

module.exports = (passport) => {

    const auth = require('./auth')(passport);

    const authRouter = require('./auth.routes')(auth);
    const kitsRouter = require('./kits.routes')(auth);
    const usersRouter = require('./users.routes')(auth);

    router.use('/auth', authRouter);
    router.use('/kits', kitsRouter);
    router.use('/users', usersRouter);

    return router;
}
