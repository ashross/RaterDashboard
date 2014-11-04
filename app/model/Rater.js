Ext.define('RaterDashboard.model.Rater', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'name',
      'avatar'
    ]
  }
});
