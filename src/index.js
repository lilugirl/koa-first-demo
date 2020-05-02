const koa = require('koa');
const path = require('path');
const app = new koa();
const helmet = require('koa-helmet');
const statics = require('koa-static');

const router = require('./routes/routes')

app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())
console.log(path.join(__dirname, '../public'))
app.listen(3000)