Ext.define('RaterDashboard.view.more.MoreInfoList', {
  extend: 'Ext.List',
  xtype: 'moreInfoList',
  config: {
    data: [
      {name: 'Privacy Policy'},
      {name: 'About Rater'}
    ],
    itemId:'moreListId',
    itemTpl: '{name}'
  }
});