Ext.define('RaterDashboard.view.video.VideoList', {
  extend: 'Ext.Container',
  xtype: 'videoList',
  config: {
//    store: 'videoStore',
//    itemId: 'videoListId',
//    cls:'videoListCls',
//    itemTpl: [
//      '<div align="center">' +
//	      '<div class="title">{title}</div>' +
//	      '<img src="{poster}" />' +
//	      '</div>'
//    ],
    scrollable: 'vertical',
    items: [
      // first
      {
	xtype: 'panel',
	padding: 10,
	html: 'What happens at the AP Reading?'
      },
      {
	xtype: 'video',
//	itemId: 'videoLinkSrcId',
	height: 200,
	width: '99%',
	url: 'resources/data/videos/AP_Reader_Recruitment_What.mp4',
	style: 'margin:25px auto 0',
	posterUrl: 'resources/images/videoThumbnails-01.jpg'
      },
      // first
      {
	xtype: 'panel',
	padding: 10,
	html: 'How do I apply?'
      },
      {
	xtype: 'video',
//	itemId: 'videoLinkSrcId',
	height: 200,
	width: '99%',
	url: 'resources/data/videos/AP_Reader_Recruitment_How.mp4',
	style: 'margin:25px auto 0',
	posterUrl: 'resources/images/videoThumbnails-02.jpg'
      },
      // first
      {
	xtype: 'panel',
	html: 'What makes the AP Reading so special?'
      },
      {
	xtype: 'video',
	itemId: 'videoLinkSrcId',
	height: 200,
	width: '99%',
	url: 'resources/data/videos/AP_Reader_Recruitment_Testimonial.mp4',
	style: 'margin:25px auto 0',
	posterUrl: 'resources/images/videoThumbnails-03.jpg'
      }
    ]
  }
});