Ext.define('RaterDashboard.view.video.VideoLinks', {
  extend: 'Ext.Panel',
  xtype: 'videoLinks',
  config: {
    scrollable: null,
    items: [
      {
	xtype: 'video',
	itemId: 'videoLinkSrcId',
	height: 200,
	width: '99%',
	style: 'margin:25px auto 0',
	posterUrl: 'resources/images/play.png'
      }
    ]
  }
});