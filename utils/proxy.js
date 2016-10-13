var https = require("./https");
var ServerURL = "https://cnodejs.org/api/v1";

var topics = "/topics";
var topic = "/topic"

module.exports = {
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
    getTopic: function(id, complete){
        httpsGet(ServerURL+topic+"/"+id, complete, {mdrender:false});
    }
};

function httpsGet(api, complete, params=null){
    https.get(ServerURL + api, complete, params)
}

function httpsPost(api, complete, params=null){
    https.post(ServerURL + api, complete, params);
}