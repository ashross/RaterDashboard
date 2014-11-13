Ext.define("RaterDashboard.view.home.HomeMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'homeMainTabPanel',
  requires: [
    'RaterDashboard.view.home.HomeCardGroup',
    'RaterDashboard.view.schedule.Schedule',
    'RaterDashboard.view.facebook.FacebookLogin',
    'RaterDashboard.view.twitter.TwitterLogin',
    'RaterDashboard.view.more.MoreCardGroup',
    'RaterDashboard.view.logout.Logout'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    items: [
      {
	xtype: 'homeCardGroup',
	itemId: 'homeCardGroupId',
	title: 'Home',
	iconCls: 'home'
      },
      {
	xtype: 'schedule',
	itemId: 'scheduleId',
	title: 'Schedule',
	iconCls: 'scheduleTabIcon'
      },
      {
	xtype: 'facebookLogin',
	itemId: 'facebookLoginId',
	title: 'Facebook',
	iconCls: 'faceBookTabIcon'
      },
      {
	xtype: 'twitterLogin',
	itemId: 'twitterLoginId',
	title: 'Twitter',
	iconCls: 'twitterTabIcon'
      },
      {
	xtype: 'moreCardGroup',
	itemId: 'moreCardGroupId',
	title: 'More Info',
	iconCls: 'infoTabIcon'
      },
      {
	title: 'Contact us',
	itemId: 'contactUsId',
	iconCls: 'contactusTabIcon',
	html: 'Contact us Screen'
      },
      {
	xtype: 'logout',
	itemId: 'logoutId',
	title: 'Logout',
	iconCls: 'logoutTabIcon'
      }
    ],
    listeners: [
      {
	fn: 'beforeCardSwitch',
	event: 'activeitemchange'
      }
    ]
  },
  beforeCardSwitch: function (tabPanel, newTab, oldTab, eOpts) {
    RaterDashboard.app.getController('HomeMainTabController').bottomTabTapped(tabPanel, newTab, oldTab, eOpts);
  }
});