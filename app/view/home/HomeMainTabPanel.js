Ext.define("RaterDashboard.view.home.HomeMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'homeMainTabPanel',
  requires: [
    'RaterDashboard.view.home.HomeCardGroup',
    'RaterDashboard.view.facebook.FacebookLogin',
    'RaterDashboard.view.twitter.TwitterLogin'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    //plugins: 'swipetabs',
    //allowDirections:'left',
    items: [
      {
	xtype: 'homeCardGroup',
	//allowSwipe:false,
	title: 'Home',
	iconCls: 'home'
      },
      {
	xtype: 'facebookLogin',
	title: 'Facebook',
	iconCls: 'faceBookTabIcon'
      },
      {
	xtype:'twitterLogin',
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
//	xtype: 'logout',
	title: 'Logout',
	iconCls: 'logoutTabIcon',
	html: 'Logout Screen'
      }
    ]
  }
});