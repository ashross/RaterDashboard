Ext.define("RaterDashboard.view.home.HomeCardGroup", {
  extend: 'Ext.Container',
  xtype: 'homeCardGroup',
  requires:[
    'RaterDashboard.view.home.RaterHome',
    'RaterDashboard.view.home.CoursesAndExams',
    'RaterDashboard.view.home.PreAP',
    'RaterDashboard.view.home.TeacherCommunity',
    'RaterDashboard.view.home.PrefessionalDevelopment',
    'RaterDashboard.view.home.APReader'
  ],
  config: {
    layout:'card',
    items: [
      {
	xtype: 'raterHome'
      },
      {
	xtype: 'coursesAndExams'
      },
      {
	xtype: 'preAP'
      },
      {
	xtype:'teacherCommunity'
      },
      {
	xtype:'prefessionalDevelopment'
      },
      {
	xtype:'apReader'
      }
    ]
  }
});