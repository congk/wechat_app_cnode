var proxy = require("../../utils/proxy");
var utils = require("../../utils/utils");

Page({
      data:{
          topic: null
      },
      onLoad:function(options){
          proxy.getTopic(options.id, (err, data)=>{
              if(!err && data.success){

                var topic = data.data;
                if(topic.tab)
                    topic.tabName = getTabName(topic.tab);
                topic.author.avatar_url = topic.author.avatar_url.replace("//", "");
                //处理评论时间
                var now = new Date();
                transLastTime2String(topic, "last_reply_at", now);

                //处理评论中的图片链接及评论时间
                topic.replies.length && topic.replies.every((item)=>{
                    item.author.avatar_url = item.author.avatar_url.replace("//", "")
                    transLastTime2String(item, "create_at", now);
                    return true;
                });

                this.setData({topic: data.data});
            } else {
                wx.navigateBack();
            }
        });
    }
})

function getTabName(tab){
    return {
      share: "分享", ask: "问答", good: "精华", job: "招聘"
    }[tab];
}

function transLastTime2String(obj, key, now){
    var seconds = (now - new Date(obj[key]).getTime())/1000;
    obj[key] = utils.transLastTime2String(seconds);
}