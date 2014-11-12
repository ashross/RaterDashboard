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
	cls: 'blockStyleLayoutCls 1111111111111111111111',
	itemId:'raterHomeId'
      },
      {
	xtype: 'coursesAndExams',
	cls: 'blockStyleLayoutCls 2222222222222222222222',
	itemId:'coursesAndExamsId'
      },
      {
	xtype: 'preAP',
	cls: 'blockStyleLayoutCls 333333333333333333333333',
	itemId:'preAPId'
      },
      {
	xtype: 'teacherCommunity',
	cls: 'blockStyleLayoutCls 44444444444444444444444',
	itemId:'teacherCommunityId'
      },
      {
	xtype: 'prefessionalDevelopment',
	cls: 'blockStyleLayoutCls 55555555555555555555555',
	itemId:'prefessionalDevelopmentId'
      },
      {
	xtype: 'apReader',
	cls: 'blockStyleLayoutCls 666666666666666666666666',
	itemId:'apReaderId'
      },
      {
	xtype: 'videoList',
	cls: 'blockStyleLayoutCls 7777777777777777777777777',
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