Ext.define("RaterDashboard.view.home.HomeMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'homeMainTabPanel',
  requires:[
    'RaterDashboard.view.video.VideoCardGroup',
    'RaterDashboard.view.home.HomeCardGroup'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    items: [
      {
	xtype:'homeCardGroup',
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
	title: 'Contact us',
	iconCls: 'user',
	html: 'Contact us Screen'
      },
      {
	xtype: 'moreCardGroup',
	title: 'More Info',
	iconCls: 'infoTabIcon'
      },
      {
//	xtype: 'logout',
	title: 'Logout',
	iconCls: 'logoutIcon',
	html: 'Logout Screen'
      }
    ]
  }
});