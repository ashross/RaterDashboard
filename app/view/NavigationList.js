Ext.define('RaterDashboard.view.NavigationList', {
  extend: 'Ext.List',
  xtype: 'navigationList',
  requires: ['Ext.data.Store'],
  config: {
    cls: 'nav-list',
    itemId: 'slideNavListId',
    itemTpl: '<div class="{iconCls}">{name}</div>',
    pinHeaders: true,
    grouped: true,
    store: 'beforeLoginSlideListStore',
    items: [
      {
	xtype: 'panel',
	docked: 'top',
	html: '<img src="resources/images/logo.png" width="100%" />'
      }
    ]
  }
});