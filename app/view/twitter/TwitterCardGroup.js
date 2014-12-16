Ext.define("RaterDashboard.view.twitter.TwitterCardGroup", {
  extend: 'Ext.Container',
  xtype: 'twitterCardGroup',
  requires: [
    'RaterDashboard.view.twitter.TwitterLogin',
    'RaterDashboard.view.twitter.TwitterActivity'
  ],
  config: {
    layout: 'card',
    items: [
      {
	       xtype: 'twitterLogin'
      },
      {
         xtype: 'twitterActivity' 
      }
    ]
  }
});