Ext.define("RaterDashboard.view.home.HomeCardGroup", {
  extend: 'Ext.Container',
  xtype: 'homeCardGroup',
  requires:[
    'RaterDashboard.view.home.Home',
    'RaterDashboard.view.home.CoursesAndExams'
  ],
  config: {
    layout:'card',
    items: [
      {
	xtype: 'home'
      },
      {
	xtype: 'coursesAndExams'
      },
    ]
  }
});