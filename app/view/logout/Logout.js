Ext.define('RaterDashboard.view.logout.Logout', {
  extend: 'Ext.form.Panel',
  xtype: 'logout',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'stretch'
    },
    cls: 'loginCls',
    items: [
      {
	xtype: 'panel',
	html: '<div align="center"><img src="resources/images/logo.png" width="40%" /></div>'
      },
      {
	xtype:'panel',
	style:'text-align:center;color:red',
	margin:10,
	html:[
	  '<div style="font-size:18px;">Alert!</div>'+
	  '<div style="font-size:15px;">Are you sure you want to Logout?</div>'
	]
      },
      {
	xtype: 'container',
	layout: {
	  type:'hbox',
	  pack:'center'
	},
	margin:10,
	items: [
//	  {
//	    xtype: 'button',
//	    text: 'No',
//	    width: 90,
//	    margin: '0 0 0 7',
//	    itemId: 'nologoutBtnId',
//	    cls: 'buttonCls'
//	  },
	  {
	    xtype: 'button',
	    text: 'Yes',
	    width: 90,
	    itemId: 'yeslogoutBtnId',
	    cls: 'buttonCls ml10'
	  }
	]
      }
    ]
  }
});