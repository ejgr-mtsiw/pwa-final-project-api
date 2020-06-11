const express = require('express');
const router = express.Router();

module.exports = (passport) => {

    const auth = require('./auth')(passport);

    const authRouter = require('./auth.routes')(auth);

    // frontend
    const indexRouter = require('./index.routes')(auth);

    //admin
    const usersRouter = require('./admin/users.routes')(auth);
    const kitsRouter = require('./admin/kits.routes')(auth);

    router.use('/', authRouter);
    router.use('/', indexRouter);

    router.use('/users', usersRouter);
    router.use('/kits', kitsRouter);

    return router;
}
