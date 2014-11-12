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
      backButton: 'mainCardGroup #backButtonId',
      // Rater home view list
      homeFeaturedList: 'homeCardGroup #homeFeaturedListId',
      homeExploreList: 'homeCardGroup #homeExploreListId',
      // homeCarouselViewId
      homeCarouselView: '#homeCarouselViewId',
      // slide Nav List
      slideNavList: 'main #slideNavListId'
    },
    control: {
      videoList: {
	itemtap: 'videoListTapped'
      },
      homeFeaturedList: {
	itemtap: 'homeListTapped'
      },
      homeExploreList: {
	itemtap: 'homeListTapped'
      },
      homeCarouselView: {
	activeitemchange: 'homeCarouselViewChanged'
      }
    }
  },
  videoListTapped: function (list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.url);
    var url = record.data.url;
    alert('video url is ' + url);
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
  },
  homeListTapped: function (list, index, target, record, e, eOpts) {
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
  },
  swipeDirection: function (container, value, oldValue, eOpts) {
//    alert();

    var me = this;
    console.log(container.getActiveItem().getItemId());

    var cardNum = container.activeIndex;
//    console.log(cardNum);
//    console.log(container.animationDirection);
//    console.log(me.getSlideNavList());
    me.getSlideNavList().select(cardNum + 1);
    if (cardNum === 0) {
      me.getMainToolbar().setTitle();
    } else if (cardNum === 1) {
      me.getMainToolbar().setTitle();
    }
  }
});