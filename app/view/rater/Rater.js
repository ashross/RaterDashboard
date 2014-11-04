Ext.define("RaterDashboard.view.rater.Rater", {
  extend: 'Ext.List',
  xtype: 'rater',
  config: {
    store:'raterStore',
    cls:'speakerListCls',
    itemTpl:[
      '<div class="avatar" style="background-image: url({avatar});">{name}</div>'
    ]
  }
});
