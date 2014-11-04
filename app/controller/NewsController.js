Ext.define("RaterDashboard.controller.NewsController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      // News view
      newsList: 'mainCardGroup #newsListId'
    },
    control: {
      newsList: {
	itemtap: 'newsListTapped'
      }
    }
  },
  newsListTapped: function(list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.url);
    var url = record.data.url;
    if (Ext.os.is.iOS) {
      console.log('iOS');
      window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
    } else if (Ext.os.is.Andriod) {
      console.log('Android');
      navigator.app.loadUrl(url, {openExternal: true});
    } else {
      console.log('web');
      window.open(url, '_system');
    }
  }
});