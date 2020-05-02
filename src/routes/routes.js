const combineRoutes = require('koa-combine-routers');

const aroutes = require('./aRouter');
const broutes = require('./b.Router');

module.exports = combineRoutes(aroutes, broutes)