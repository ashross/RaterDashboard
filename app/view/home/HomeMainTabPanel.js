Ext.define("RaterDashboard.view.home.HomeMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'homeMainTabPanel',
  requires: [
    'RaterDashboard.view.home.HomeCardGroup'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    items: [
      {
	xtype: 'homeCardGroup',
	title: 'Home',
	iconCls: 'home'
      },
      {
	xtype: 'facebookCardGroup',
	title: 'Facebook',
	iconCls: 'faceBookTabIcon'
      },
      {
	title: 'Twitter',
	iconCls: 'twitterTabIcon',
	html: 'Twitter section'
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
      }
//      ,
//      {
//	xtype: 'logout',
//	title: 'Logout',
//	iconCls: 'logoutTabIcon',
//	html: 'Logout Screen'
//      }
    ]
  }
});