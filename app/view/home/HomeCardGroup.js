Ext.define("RaterDashboard.view.home.HomeCardGroup", {
  extend: 'Ext.carousel.Carousel',
  xtype: 'homeCardGroup',
  requires: [
    'RaterDashboard.view.home.RaterHome',
    'RaterDashboard.view.home.CoursesAndExams',
    'RaterDashboard.view.home.PreAP',
    'RaterDashboard.view.home.TeacherCommunity',
    'RaterDashboard.view.home.PrefessionalDevelopment',
    'RaterDashboard.view.home.APReader',
    'RaterDashboard.view.home.VideoList'
  ],
  config: {
    itemId: 'homeCarouselViewId',
    indicator: false,
    activeItem: 0,
    cls: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww swipeCardsCls',
    items: [
      {
	xtype: 'raterHome',
	itemId:'raterHomeId'
      },
      {
	xtype: 'coursesAndExams',
	itemId:'coursesAndExamsId'
      },
      {
	xtype: 'preAP',
	itemId:'preAPId'
      },
      {
	xtype: 'teacherCommunity',
	itemId:'teacherCommunityId'
      },
      {
	xtype: 'prefessionalDevelopment',
	itemId:'prefessionalDevelopmentId'
      },
      {
	xtype: 'apReader',
	itemId:'apReaderId'
      },
      {
	xtype: 'videoList',
	itemId:'videoListId'
      }
    ],
    listeners: [
      {
	fn: 'beforeCardSwitch',
	event: 'activeitemchange'
      }
    ]
  },
  beforeCardSwitch: function (container, value, oldValue, eOpts) {
    RaterDashboard.app.getController('RaterModuleController').swipeDirection(container, value, oldValue, eOpts);
  }
});