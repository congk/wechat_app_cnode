module.exports = {
    get: function(url, complete, params) {
        wx.request(getUrlRequest(url, "GET", complete, params));
    },
    post: function(url, complete, params) {
        wx.request(getUrlRequest(url, "POST", complete, params));
    }
};

function getUrlRequest(url, method, complete, params){
    var urlRequest = {
        url: url,
        method: method,
        success: (res)=>complete(null, res.data),
        fail: (err)=>complete(err.errMsg)
    };
    if(params)
        urlRequest.data = params;
    return urlRequest;
}