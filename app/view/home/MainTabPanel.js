Ext.define("RaterDashboard.view.home.MainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'mainTabPanel',
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
	title: 'Contact us',
	iconCls: 'user',
	html: 'Contact us Screen'
      },
      {
	title: 'More Info',
	iconCls: 'info',
	html: 'More Info Screen'
      }
    ]
  }
});