Ext.define("RaterDashboard.view.APCentralMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'apCentralMainTabPanel',
  requires: [
    'RaterDashboard.view.APCentral',
    'RaterDashboard.view.more.MoreCardGroup',
    'RaterDashboard.view.facebook.FacebookCardGroup',
    'RaterDashboard.view.users.Login'
  ],
  config: {
    tabBarPosition: 'bottom',
    defaults: {
      styleHtmlContent: true
    },
    items: [
      {
	xtype: 'apCentral',
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
	iconCls: 'user',
	html: 'Contact us Screen'
      },
      {
	xtype: 'login',
	title: 'Login',
	iconCls: 'info'
      }
    ]
  }
});