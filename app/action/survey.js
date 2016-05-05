/**
 * Created by linfeiyang on 5/3/16.
 */
var model = require('../lib/model');



exports.commit = function(req, res, next){
    //console.log(req.body);
    var body = req.body || {};
    body.ip = getClientAddress(req);
    model.smartyAdd('record', body, true, function(err, result){
        if(err) {
            console.log(err);
            return res.json({bianhao: 0, status: "失败"});
        }
        console.log(result);
        return res.json({bianhao: result.insertId, status: "成功"});
    });
};

getClientAddress = function (req) {
    return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
};
