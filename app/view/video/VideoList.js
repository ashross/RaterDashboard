Ext.define('RaterDashboard.view.video.VideoList', {
  extend: 'Ext.DataView',
  xtype: 'videoList',
  config: {
    store: 'videoStore',
    itemId: 'videoListId',
    cls:'videoListCls',
    itemTpl: [
      '<div align="center">' +
	      '<div class="title">{title}</div>' +
	      '<img src="{poster}" />' +
	      '</div>'
    ]
  }
});