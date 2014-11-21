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
    var me = this;
    container.getActiveItem().setCls('blockStyleLayoutCls activeCardCls');
    container.getActiveItem().setStyle('left: -20px;');
    console.log(container.animationDirection);
    

    if (container.animationDirection === 1) {
      oldValue.setStyle('left:0px');
      oldValue.setCls('blockStyleLayoutCls');
    } else {
      oldValue.setStyle('left:-40px');
      oldValue.setCls('blockStyleLayoutCls');
    }
    var cardNum = container.activeIndex;
    if (cardNum === 0) {
      me.getMainToolbar().setTitle('Rater Home');
      me.getSlideNavList().select(5);
    } else if (cardNum === 1) {
      me.getMainToolbar().setTitle('Courses & Exams');
      me.getSlideNavList().select(2);
    } else if (cardNum === 2) {
      me.getMainToolbar().setTitle('PreAP &reg;');
      me.getSlideNavList().select(3);
    } else if (cardNum === 3) {
      me.getMainToolbar().setTitle('Teacher Community');
      me.getSlideNavList().select(1);
    } else if (cardNum === 4) {
      me.getMainToolbar().setTitle('Prefessional Development');
      me.getSlideNavList().select(4);
    } else if (cardNum === 5) {
      me.getMainToolbar().setTitle('AP Reader');
      me.getSlideNavList().select(6);
    } else if (cardNum === 6) {
      me.getMainToolbar().setTitle('Videos');
      me.getSlideNavList().select(7);
    }
  }
});