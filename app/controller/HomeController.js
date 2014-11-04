Ext.define("RaterDashboard.controller.HomeController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      // News view
      homeFeaturedList: 'homeCardGroup #homeFeaturedListId',
      homeExploreList: 'homeCardGroup #homeExploreListId'
    },
    control: {
      homeFeaturedList: {
	itemtap: 'homeListTapped'
      },
      homeExploreList: {
	itemtap: 'homeListTapped'
      }
    }
  },
  homeListTapped: function(list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.url);
    var url = record.data.url;
    if (Ext.os.is.iOS) {
      window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
    } else if (Ext.os.is.Andriod) {
      navigator.app.loadUrl(url, {openExternal: true});
    } else {
      window.open(url, '_system');
    }
  }
});