Ext.define('RaterDashboard.model.SlideNavList', {
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