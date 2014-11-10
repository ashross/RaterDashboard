Ext.define('RaterDashboard.view.NavigationList', {
  extend: 'Ext.List',
  xtype: 'navigationList',
  requires: ['Ext.data.Store'],
  config: {
    cls: 'nav-list',
    itemId: 'slideNavListId',
    itemTpl: '<div class="{iconCls}"><span>{name}</span></div>',
    pinHeaders: true,
    grouped: true,
    store: 'slideNavListStore',
    items: [
      {
	xtype: 'panel',
	docked: 'top',
	html: '<img src="resources/images/logo.png" width="100%" />'
      }
    ]
  }
});