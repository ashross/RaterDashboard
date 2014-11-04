Ext.define("RaterDashboard.view.facebook.FacebookCardGroup", {
  extend: 'Ext.Container',
  xtype: 'facebookCardGroup',
  requires: [
    'RaterDashboard.view.facebook.FacebookLogin'
  ],
  config: {
    layout: 'card',
    items: [
      {
	xtype: 'facebookLogin'
      }
    ]
  }
});