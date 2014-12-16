Ext.define('RaterDashboard.store.Contacts', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.Contacts',
    //storeId: 'contacts',
    autoLoad: true,
  }
});