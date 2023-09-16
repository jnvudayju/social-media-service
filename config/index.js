require("dotenv").config();
const _ = require('underscore');
const defaultConfig = require('./default');


module.exports = _.extend(defaultConfig, require(`./${defaultConfig.env}.js`));