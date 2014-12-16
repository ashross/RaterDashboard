Ext.define('RaterDashboard.store.FBFriendsList', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.FBFriendsList',
    //storeId: 'contacts',
    autoLoad: true,
  }
});