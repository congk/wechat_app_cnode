var https = require("./https");
var ServerURL = "https://cnodejs.org/api/v1";

var topics = "/topics";

module.exports = {
    getTopics: function(tab, page, limit, complete){
        var params = {
            limit: limit,
            page: page
        }
        if(tab)
            params.tab = tab;
        https.get(ServerURL+topics, complete, params)
    }
};