Ext.define('RaterDashboard.model.FBFriendsList', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'uid',
      'name'
    ]
  }
});