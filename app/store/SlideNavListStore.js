Ext.define('RaterDashboard.store.SlideNavListStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.SlideNavList',
    storeId: 'slideNavListStore',
    sorters: 'type',
//    sorters: [{
//	property: 'type',
//	direction: 'DESC'
//      }],
    grouper: {
      groupFn: function (item) {
	return item.get('type');
      }
    },
    autoLoad: true
  }
});
