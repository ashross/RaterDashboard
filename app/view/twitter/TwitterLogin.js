Ext.define('RaterDashboard.view.twitter.TwitterLogin', {
  extend: 'Ext.Container',
  xtype: 'twitterLogin',
  config: {
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
      {
	xtype: 'button',
	cls: 'scheduleBtnCls',
	itemId: 'twitterBtnId',
	text: 'Twitter Login'
      }
    ]
  }
});