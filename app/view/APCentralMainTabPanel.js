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
	title: 'Home',
	iconCls: 'home'
      },
      {
	xtype: 'facebookLogin',
	title: 'Facebook',
	iconCls: 'faceBookTabIcon'
      },
      {
	xtype: 'twitterLogin',
	title: 'Twitter',
	iconCls: 'twitterTabIcon'
      },
      {
	xtype: 'moreCardGroup',
	title: 'More Info',
	iconCls: 'infoTabIcon'
      },
      {
	title: 'Contact us',
	iconCls: 'contactusTabIcon',
	html: 'Contact us Screen'
      },
      {
	xtype: 'login',
	title: 'Login',
	iconCls: 'loginTabIcon'
      }
    ]
  }
});