Ext.define('RaterDashboard.model.News', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'title',
      'content',
      'url'
    ]
  }
});