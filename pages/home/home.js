var proxy = require("../../utils/proxy")

Page({
  data:{
    topics: null,   //帖子数据数组
    page: 1,        //当前页
    tab: "all",      //主题：all|good|share|ask|job
    limit: 30       //单页帖子显示数量
  },
  onShow:function(){
    this.getTopics(this.data.tab, this.data.page);
  },
  changeTab: function(e){
      this.getTopics(e.target.id, 1);
  },
  pageUp: function(){
      if(this.data.page > 1)
        this.getTopics(this.data.tab, this.data.page - 1);
  },
  pageDown: function(){
      this.getTopics(this.data.tab, this.data.page + 1);
  },
  getTopics: function(tab, page){
      proxy.getTopics(tab, page, this.data.limit, (err, data)=>{
          if(!err){
              var now = Date.now();
              data.data.length && data.data.every((item)=>{
                  //处理头像
                  item.author.avatar_url = item.author.avatar_url.replace("//", "");
                  //处理最后评论时间
                  var replyTime = new Date(item.last_reply_at).getTime();
                  item.last_reply_at = transLastReplyTime2String((now - replyTime)/1000);
                  return true;
              });
              this.setData({
                  "tab": tab,
                  "page": page,
                  "topics": data.data
              });
          }
      });
  }
})

function transLastReplyTime2String(seconds){
    if(seconds >= 3600 * 24)
        return Math.floor(seconds / (3600 * 24)) + "天前";
    if(seconds >= 3600)
        return Math.floor(seconds / 3600) + "小时前";
    if(seconds >= 60)
        return Math.floor(seconds / 60) + "分钟前";
    return Math.floor(seconds) + "秒前";
}