Ext.define("RaterDashboard.view.video.VideoCardGroup", {
  extend: 'Ext.Container',
  xtype: 'videoCardGroup',
  requires:[
    'RaterDashboard.view.video.VideoLinks',
    'RaterDashboard.view.video.VideoList'
  ],
  config: {
    layout:'card',
    items: [
      {
	xtype: 'videoList'
      },
      {
	xtype: 'videoLinks'
      }
//      {
//	xtype: 'coursesAndExams'
//      }
    ]
  }
});