var proxy = require("../../utils/proxy")

var limit = 20;     //单页帖子显示数量

Page({
  data:{
    topics: null,
    page: 1,
    tab: null
  },
  onShow:function(){
    this.getTopics(null, 1);
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
      proxy.getTopics(tab, page, limit, (err, data)=>{
          if(!err){
              this.setData({
                  "tab": tab,
                  "page": page,
                  "topics": data.data
              })
          }
      });
  }
})