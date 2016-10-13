module.exports = {
    transLastTime2String: function(seconds){
        if(seconds >= 3600 * 24 * 365)
            return Math.floor(seconds / (3600 * 24 * 365)) + "年前";
        if(seconds >= 3600 * 24 * 30)
            return Math.floor(seconds / (3600 * 24 * 30)) + "月前";
        if(seconds >= 3600 * 24)
            return Math.floor(seconds / (3600 * 24)) + "天前";
        if(seconds >= 3600)
            return Math.floor(seconds / 3600) + "小时前";
        if(seconds >= 60)
            return Math.floor(seconds / 60) + "分钟前";
        return Math.floor(seconds) + "秒前";
    }
};
