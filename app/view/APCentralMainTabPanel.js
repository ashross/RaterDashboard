Ext.define("RaterDashboard.view.APCentralMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'apCentralMainTabPanel',
  requires:[
    'RaterDashboard.view.APCentral'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    items: [
      {
	xtype:'apCentral',
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