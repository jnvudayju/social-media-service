const jwt = require('jsonwebtoken');
const config = require('../config');
const Logger = require('../utils/logger');
const User = require("../models/User");

const logger = new Logger('auth.middleware');

const auth = async (req, res, next) => {
    const accessToken = req.headers['u-access-token'];

    try {
        const data = jwt.verify(accessToken, config.jwt.secret);
        const user = await User.findOne({ username: data.username });
        req.user = user;
        next(null);
    } catch(e) {
        logger.error("Error decoding token", e);

        return res.status(401).json({
            message: "Unauthorized",
            data: null,
            status: 401
        })
    }
}

module.exports = auth;