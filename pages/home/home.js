var https = require("../../utils/https");

Page({
  onLoad: function(options){
  },
  onReady:function(){
  },
  onShow:function(){
  },
  onHide:function(){
  },
  onUnload:function(){
  },
  onPullDownRefresh: function(){
    //处理下拉刷新
    console.log("onPullDownRefresh");
    wx.stopPullDownRefresh();
  }
})