Ext.define('RaterDashboard.view.facebook.FacebookLogin', {
  extend: 'Ext.Container',
  xtype: 'facebookLogin',
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
      }
    ]
  }
});