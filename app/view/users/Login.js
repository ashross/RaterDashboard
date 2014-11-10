Ext.define('RaterDashboard.view.users.Login', {
  extend: 'Ext.form.Panel',
  xtype: 'login',
  config: {
    layout: {
      type: 'vbox',
      pack: 'center',
      align:'center'
    },
    cls: 'loginCls',
    items: [
      {
	xtype: 'panel',
	html: '<img src="resources/images/logo.png" width="100%" />'
      },
      {
	xtype: 'fieldset',
	title: 'Log in',
	items: [
	  {
	    xtype: 'emailfield',
	    placeHolder: 'email@example.com',
	    value: 'test@gmail.com',
	    name: 'email'
	  },
	  {
	    xtype: 'passwordfield',
	    placeHolder: '******',
	    value: '123',
	    name: 'password'
	  }
	]
      },
      {
	xtype:'container',
	layout: 'hbox',
	items: [
	  {
	    xtype: 'button',
	    text: 'Login',
	    width: 153,
	    itemId: 'loginBtnId',
	    cls: 'buttonCls'
	  },
	  {
	    xtype: 'button',
	    text: 'Forgot Password',
	    cls: 'transparentBtnCls ml10 font13',
	    name: 'moveToForgetPasswordBtn'
	  }
	]
      },
      {
	xtype: 'button',
	text: 'Create an Accoount',
	margin: 10,
	cls: 'transparentBtnCls font13',
	docked: 'bottom'
      }
    ]
  }
});