Ext.define('RaterDashboard.view.twitter.TwitterLogin', {
  extend: 'Ext.Container',
  xtype: 'twitterLogin',
  config: {
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    items: [
      {
        	 xtype: 'panel',
	         html: '<div class="fb-login-button" data-max-rows="2" data-size="large" data-show-faces="true" data-auto-logout-link="true"></div>'
      },
       
	  {
	    xtype: 'button',
	    cls: 'scheduleBtnCls',
	    itemId: 'twitterBtnId',
	    text: 'Twitter Login'
	  }
    ]
  }
});