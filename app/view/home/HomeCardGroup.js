Ext.define("RaterDashboard.view.home.HomeCardGroup", {
  extend: 'Ext.Container',
  xtype: 'homeCardGroup',
  requires:[
    'RaterDashboard.view.home.Home',
    'RaterDashboard.view.home.CoursesAndExams',
    'RaterDashboard.view.home.PreAP',
    'RaterDashboard.view.home.TeacherCommunity'
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
      {
	xtype: 'preAP'
      },
      {
	xtype:'teacherCommunity'
      }
    ]
  }
});