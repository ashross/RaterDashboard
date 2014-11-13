Ext.define("RaterDashboard.view.sponsor.Sponsor", {
  extend: 'Ext.Container',
  xtype: 'sponsor',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
      {
	xtype: 'panel',
	html: 'sponsors'
      }
    ]
  }
});
