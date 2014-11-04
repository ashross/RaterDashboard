Ext.define("RaterDashboard.view.sponsor.Sponsor", {
  extend: 'Ext.Container',
  xtype: 'sponsor',
  config: {
    scrollable:'vertical',
    items: [
      {
	xtype: 'panel',
	html: 'sponsors'
      }
    ]
  }
});
