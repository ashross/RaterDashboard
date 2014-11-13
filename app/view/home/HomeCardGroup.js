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
    cls: 'swipeCardsCls',
    items: [
      {
	xtype: 'raterHome',
	cls: 'blockStyleLayoutCls',
	itemId: 'raterHomeId'
      },
      {
	xtype: 'coursesAndExams',
	cls: 'blockStyleLayoutCls',
	itemId: 'coursesAndExamsId'
      },
      {
	xtype: 'preAP',
	cls: 'blockStyleLayoutCls',
	itemId: 'preAPId'
      },
      {
	xtype: 'teacherCommunity',
	cls: 'blockStyleLayoutCls',
	itemId: 'teacherCommunityId'
      },
      {
	xtype: 'prefessionalDevelopment',
	cls: 'blockStyleLayoutCls',
	itemId: 'prefessionalDevelopmentId'
      },
      {
	xtype: 'apReader',
	cls: 'blockStyleLayoutCls',
	itemId: 'apReaderId'
      },
      {
	xtype: 'videoList',
	cls: 'blockStyleLayoutCls',
	itemId: 'videoListId'
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