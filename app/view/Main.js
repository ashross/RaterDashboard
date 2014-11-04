Ext.define('RaterDashboard.view.Main', {
  extend: 'Ext.Container',
  xtype: 'main',
  requires:[
    'RaterDashboard.view.NavigationList',
    'RaterDashboard.view.MainCardGroup'
  ],
  config: {
    fullscreen: true,
    layout: 'hbox',
    items: [
      {
	xtype: 'mainCardGroup',
	cls: 'slide',
	width: '100%'
      },
      {
	xtype: 'navigationList',
	width: 250
      }
    ]
  }
});
