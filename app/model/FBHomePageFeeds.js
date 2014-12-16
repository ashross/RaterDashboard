Ext.define('RaterDashboard.model.FBHomePageFeeds', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'name',
      'uid',
      {name : 'avatar', type: 'string', defaultValue: 'resources/images/user.png'},
      'message',
      'type',
      'picture',
      { name: 'updated_time', type: 'date'}
    ]
  }
});