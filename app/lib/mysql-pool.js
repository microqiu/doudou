/**
 * Created by linfeiyang on 5/3/16.
 */
var mysql = require('mysql');
var config = require('../config');

var pool  = mysql.createPool(config.mysql);

module.exports = pool;