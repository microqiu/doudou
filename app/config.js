/**
 * Created by linfeiyang on 5/3/16.
 */
var config = {
    mysql: {
        host     : process.env.DBHOST,
        user     : process.env.DBUSER,
        password : process.env.DBPASSWORD,
        database : process.env.DBNAME 
    }
};

module.exports = config;
