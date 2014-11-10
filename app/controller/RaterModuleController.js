Ext.define("RaterDashboard.controller.RaterModuleController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      videoCardGroup: 'videoCardGroup',
      // Video List view
      videoList: 'mainCardGroup #videoListId',
      videoLinkSrc: 'mainCardGroup #videoLinkSrcId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId'
    },
    control: {
      videoList: {
	itemtap: 'videoListTapped'
      }
    }
  },
  videoListTapped: function (list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.url);
    var url = record.data.url;
    alert('video url is '+ url);
    me.getNavBtn().setHidden(true);
    me.getBackButton().setHidden(false);
    me.getMainToolbar().setTitle('Player');
    GLOB.v.previousPage = 'videoList';
    GLOB.v.previousPageTitle = 'Videos';
    me.getVideoCardGroup().animateActiveItem('videoLinks', {
      type: 'slide',
      direction: 'left'
    });
    me.getVideoLinkSrc().setUrl(url);
  }
});