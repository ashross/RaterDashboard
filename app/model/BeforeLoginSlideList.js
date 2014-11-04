Ext.define('RaterDashboard.model.BeforeLoginSlideList', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'name',
      'type',
      'iconCls'
    ]
  }
});
