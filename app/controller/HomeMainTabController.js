Ext.define("RaterDashboard.controller.HomeMainTabController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      homeCardGroup: 'homeCardGroup',
      slideNavList: 'main #slideNavListId'
    },
    control: {
    }
  },
  bottomTabTapped: function (tabPanel, newTab, oldTab, eOpts) {
    var me = this;
    console.log('tab is clicked');
    console.log(tabPanel.getActiveItem().getItemId());
    var cardID = tabPanel.getActiveItem().getItemId();

    if (cardID === 'homeCardGroupId') {

      me.getHomeCardGroup().setActiveItem(0);
      me.getMainToolbar().setTitle('Rater Home');
      me.getSlideNavList().select(5);

    } else if (cardID === 'scheduleId') {

      me.getMainToolbar().setTitle('Schedule');
      me.getSlideNavList().select(8);

    } else if (cardID === 'facebookLoginId') {

      me.getMainToolbar().setTitle('Facebook Login');
      me.getSlideNavList().select(9);

    } else if (cardID === 'twitterLoginId') {

      me.getMainToolbar().setTitle('Twitter');
      me.getSlideNavList().select(10);

    } else if (cardID === 'moreCardGroupId') {

      me.getMainToolbar().setTitle('More  Info');
      me.getSlideNavList().deselectAll();

    } else if (cardID === 'contactUsId') {

      me.getMainToolbar().setTitle('Contact us');
      me.getSlideNavList().deselectAll();

    } else if (cardID === 'logoutId') {

      me.getMainToolbar().setTitle('Logout');
      me.getSlideNavList().select(0);

    }
  }
});