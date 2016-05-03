/**
 * Created with WebStorm.
 * User: xiaoqiu
 * Email: lupengfei@gozap.com
 * Date: 15/6/29
 * Time: 上午11:59
 * Description:
 */
var winston = require('winston');
var moment = require('moment');
winston.add(winston.transports.File,{filename: 'logs/',datePattern:'/yyyy-MM-dd.log',timestamp: function(){return moment().format('YYYY-MM-DD HH:mm:ss')}});
module.exports = winston;