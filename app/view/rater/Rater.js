Ext.define("RaterDashboard.view.rater.Rater", {
  extend: 'Ext.List',
  xtype: 'rater',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    store: 'raterStore',
    cls: 'speakerListCls',
    itemTpl: [
      '<div class="avatar" style="background-image: url({avatar});">{name}</div>'
    ]
  }
});
