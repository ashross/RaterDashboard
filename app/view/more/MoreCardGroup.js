Ext.define("RaterDashboard.view.more.MoreCardGroup", {
  extend: 'Ext.Container',
  xtype: 'moreCardGroup',
  requires: [
    'RaterDashboard.view.more.MoreInfoList',
    'RaterDashboard.view.more.PrivacyPolicy',
    'RaterDashboard.view.more.AboutRater'
  ],
  config: {
    layout: 'card',
    items: [
      {
	xtype: 'moreInfoList'
      },
      {
	xtype: 'privacyPolicy'
      },
      {
	xtype: 'aboutRater'
      }
    ]
  }
});