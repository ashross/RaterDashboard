Ext.define('RaterDashboard.view.home.VideoList', {
  extend: 'Ext.Container',
  xtype: 'videoList',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
      // first
      {
	xtype: 'panel',
	padding: 10,
	cls:'alignC',
	html: '<b>What happens at the AP Reading?</b>'
      },
      {
	xtype: 'video',
//	itemId: 'videoLinkSrcId',
	height: 200,
	width: '50%',
	url: 'resources/data/videos/AP_Reader_Recruitment_What.mp4',
	margin:'0 auto',
	posterUrl: 'resources/images/videoThumbnails-01.jpg'
      },
      {
	xtype: 'panel',
	padding:10,
	cls:'alignC bordB',
	html: 'Watch Video'
      },
      // first
      {
	xtype: 'panel',
	padding: 10,
	cls:'alignC',
	html: '<b>How do I apply?</b>'
      },
      {
	xtype: 'video',
//	itemId: 'videoLinkSrcId',
	height: 200,
	width: '50%',
	url: 'resources/data/videos/AP_Reader_Recruitment_How.mp4',
	margin:'0 auto',
	posterUrl: 'resources/images/videoThumbnails-02.jpg'
      },
      {
	xtype: 'panel',
	padding:10,
	cls:'alignC bordB',
	html: 'Watch Video'
      },
      // first
      {
	xtype: 'panel',
	padding:10,
	cls:'alignC',
	html: '<b>What makes the AP Reading so special?</b>'
      },
      {
	xtype: 'video',
	itemId: 'videoLinkSrcId',
	height: 200,
	width: '50%',
	url: 'resources/data/videos/AP_Reader_Recruitment_Testimonial.mp4',
	margin:'0 auto',
	posterUrl: 'resources/images/videoThumbnails-03.jpg'
      },
      {
	xtype: 'panel',
	padding:10,
	cls:'alignC bordB',
	html: 'Watch Video'
      }
    ]
  }
});