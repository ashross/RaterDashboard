Ext.define('RaterDashboard.model.Video', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'title',
      'url',
      'poster'
    ]
  }
});
