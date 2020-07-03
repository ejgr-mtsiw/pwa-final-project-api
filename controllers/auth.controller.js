const messages = require('../config/messages/login');

exports = module.exports = {};

exports.signin = (req, res) => {
    let userdata = {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        lastLogin: req.user.lastLogin,
        role: req.user.role
    };

    return res.status(messages.user.signinSucces.status)
        .send(userdata);
};

exports.signout = (req, res) => {
    req.session.destroy();
    return res.status(messages.user.logoutSuccess.status)
        .send(messages.user.logoutSuccess);
};
