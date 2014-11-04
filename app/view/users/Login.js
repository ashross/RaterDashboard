Ext.define('RaterDashboard.view.users.Login', {
  extend: 'Ext.form.Panel',
  xtype: 'login',
  config: {
    layout:{
      type:'vbox',
      pack:'center'
    },
    items: [
      {
	xtype: 'panel',
	html: '<img src="resources/images/logo.png" width="100%" />',
	maskOnOpen: true
      },
      {
	xtype: 'fieldset',
	title: 'Log in',
	items: [
	  {
	    xtype: 'emailfield',
	    placeHolder: 'email@example.com',
	    value:'test@gmail.com',
	    name: 'email'
	  },
	  {
	    xtype: 'passwordfield',
	    placeHolder: '******',
	    value:'123',
	    name: 'password'
	  }
	]
      },
      {
	xtype: 'button',
	text: 'Login',
	margin: 10,
	itemId:'loginBtnId',
	cls: ''
      },
      {
	xtype: 'button',
	text: 'Create an Accoount',
	margin:10,
	cls: '',
	docked: 'bottom'
      }
    ]
  }
});