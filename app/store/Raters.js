Ext.define('RaterDashboard.store.Raters', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.Rater',
    storeId: 'raterStore',
    autoLoad: true,
    autoSync: true
  }
});
