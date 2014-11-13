Ext.define('RaterDashboard.view.more.MoreInfoList', {
  extend: 'Ext.List',
  xtype: 'moreInfoList',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    data: [
      {name: 'Privacy Policy'},
      {name: 'About Rater'}
    ],
    itemId:'moreListId',
    itemTpl: '{name}'
  }
});