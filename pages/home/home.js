var proxy = require("../../utils/proxy")
var utils = require("../../utils/utils")

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
                  var seconds = (now - new Date(item.last_reply_at).getTime())/1000;
                  //处理最后评论时间
                  item.last_reply_at = utils.transLastTime2String(seconds);
                  return true;
              });
              this.setData({
                  "tab": tab,
                  "page": page,
                  "topics": data.data
              });
          }
      });
    },
    navigateToTopicDetail: function(e){
        wx.navigateTo({
            url: "../detail/detail?id="+e.target.id
        });
    }
})