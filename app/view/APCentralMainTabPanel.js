Ext.define("RaterDashboard.view.APCentralMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'apCentralMainTabPanel',
  requires: [
    'RaterDashboard.view.APCentral',
    'RaterDashboard.view.more.MoreCardGroup',
    'RaterDashboard.view.facebook.FacebookLogin',
    'RaterDashboard.view.twitter.TwitterLogin',
    'RaterDashboard.view.users.Login'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    plugins: 'swipetabs',
    items: [
      {
	xtype: 'apCentral',
	itemId: 'apCentralId',
	title: 'Home',
	iconCls: 'home'
      },
      {
	xtype: 'facebookLogin',
	itemId: 'facebookId',
	title: 'Facebook',
	iconCls: 'faceBookTabIcon'
      },
      {
	xtype: 'twitterLogin',
	itemId: 'twitterId',
	title: 'Twitter',
	iconCls: 'twitterTabIcon'
      },
      {
	xtype: 'moreCardGroup',
	itemId: 'moreId',
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
	xtype: 'login',
	itemId: 'loginId',
	title: 'Login',
	iconCls: 'loginTabIcon'
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