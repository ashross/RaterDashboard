Ext.define("RaterDashboard.view.News", {
  extend: 'Ext.DataView',
  xtype: 'news',
  config: {
    store:'newsStore',
    cls:'newsListCls',
    itemId:'newsListId',
    itemTpl:[
      '<div class="headingCls">{title}</div>'+
      '<div class="contentCls">{content}</div>'
    ]
  }
});