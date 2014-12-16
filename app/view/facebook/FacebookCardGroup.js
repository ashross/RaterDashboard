Ext.define("RaterDashboard.view.facebook.FacebookCardGroup", {
  extend: 'Ext.Container',
  xtype: 'facebookCardGroup',
  requires: [
    'RaterDashboard.view.facebook.FacebookLogin',
    'RaterDashboard.view.facebook.FacebookActivity',
    'RaterDashboard.view.facebook.FacebookFriendsList'
  ],
  config: {
    layout: 'card',
    items: [
      {
	       xtype: 'facebookLogin'
      },
      {
         xtype: 'facebookActivity' 
      },
      {
         xtype: 'facebookFriendsList' 
      },
    ]
  }
});