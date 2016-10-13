var https = require("./https");
var ServerURL = "https://cnodejs.org/api/v1";

var topics = "/topics";
var topic = "/topic"

module.exports = {
    //获取主题列表
    getTopics: function(tab, page, limit, complete){
        var params = {
            limit: limit,
            page: page,
            mdrender: false
        }
        if(tab)
            params.tab = tab;
        httpsGet(topics, complete, params);
    },
    //获取单个主题详情信息
    getTopic: function(id, complete){
        httpsGet(topic+"/"+id, complete/*, {mdrender:false}*/);
    }
};

function httpsGet(api, complete, params=null){
    https.get(ServerURL + api, complete, params)
}

function httpsPost(api, complete, params=null){
    https.post(ServerURL + api, complete, params);
}