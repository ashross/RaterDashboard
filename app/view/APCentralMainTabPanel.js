Ext.define("RaterDashboard.view.APCentralMainTabPanel", {
  extend: 'Ext.TabPanel',
  xtype: 'apCentralMainTabPanel',
  requires: [
    'RaterDashboard.view.APCentral',
    'RaterDashboard.view.more.MoreCardGroup',
    'RaterDashboard.view.facebook.FacebookCardGroup',
    'RaterDashboard.view.twitter.TwitterCardGroup',
    'RaterDashboard.view.Contacts.ContactsCardGroup',
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
  xtype: 'facebookCardGroup',
  title: 'Facebook',
  iconCls: 'faceBookTabIcon'
      },
      {
  xtype: 'twitterCardGroup',
  title: 'Twitter',
  iconCls: 'twitterTabIcon',
  //html: 'Twitter section'
      },
      {
  xtype: 'contactsCardGroup',
  title: 'Tell Friends',
  iconCls: 'user',
  //itemId: 'contactsTabId'
  //html: 'Tell Friends About US'
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