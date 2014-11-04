Ext.define("RaterDashboard.controller.MoreController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      moreCardGroup: 'moreCardGroup',
      moreList: 'moreCardGroup #moreListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId',
      // videos view
      videoCardGroup:'videoCardGroup'
    },
    control: {
      moreList: {
	itemtap: 'moreListTapped'
      },
      backButton: {
	tap: 'backButtonTapped'
      }
    }
  },
  moreListTapped: function(list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.name);
    if (record.data.name === 'Privacy Policy') {
      me.getNavBtn().setHidden(true);
      me.getBackButton().setHidden(false);
      me.getMainToolbar().setTitle(record.data.name);
      GLOB.v.previousPage = 'moreCardGroup';
      GLOB.v.previousPageTitle = 'More Info';
      console.log(GLOB.v.previousPage);
      me.getMoreCardGroup().animateActiveItem('privacyPolicy', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'About Rater') {
      me.getNavBtn().setHidden(true);
      me.getBackButton().setHidden(false);
      me.getMainToolbar().setTitle(record.data.name);
      GLOB.v.previousPage = 'moreCardGroup';
      GLOB.v.previousPageTitle = 'More Info';
      console.log(GLOB.v.previousPage);
      me.getMoreCardGroup().animateActiveItem('aboutRater', {
	type: 'slide',
	direction: 'left'
      });
    }
  },
  backButtonTapped: function() {

    var me = this;
    me.getNavBtn().setHidden(false);
    me.getBackButton().setHidden(true);
    me.getMainToolbar().setTitle(GLOB.v.previousPageTitle);
    console.log(GLOB.v.previousPage);
    if (GLOB.v.previousPage === 'moreCardGroup') {
      me.getMoreCardGroup().animateActiveItem(GLOB.v.previousPage, {
	type: 'slide',
	direction: 'right'
      });
    }else{
      me.getVideoCardGroup().animateActiveItem(GLOB.v.previousPage, {
	type: 'slide',
	direction: 'right'
      });
    }

  }
});