Ext.define("RaterDashboard.view.MainCardGroup", {
  extend: 'Ext.Container',
  xtype: 'mainCardGroup',
  requires: [
    'RaterDashboard.view.News',
    'RaterDashboard.view.users.Login',
    'RaterDashboard.view.maps.Maps',
    'RaterDashboard.view.more.MoreCardGroup',
    'RaterDashboard.view.sponsor.Sponsor',
    'RaterDashboard.view.rater.Rater',
    'RaterDashboard.view.home.MainTabPanel',
    'RaterDashboard.view.facebook.FacebookCardGroup',
    'RaterDashboard.view.video.VideoCardGroup'
  ],
  config: {
    layout: 'card',
    items: [
      {
	xtype: 'titlebar',
	title: 'News',
	ui:'mainToolbar',
	itemId: 'mainToolbarId',
	docked: 'top',
	items: [
	  {
	    xtype: 'button',
	    itemId: 'navBtnId',
	    iconCls: 'list',
	    ui: 'plain'
	  },
	  {
	    xtype: 'button',
	    hidden: true,
	    itemId: 'backButtonId',
	    text: 'Back',
	    ui: 'back'
	  }
	]
      },
      {
	xtype: 'news'
      },
      {
	xtype: 'login'
      },
      {
	xtype: 'maps'
      },
      {
	xtype: 'sponsor'
      },
      {
	xtype: 'rater'
      },
      {
	xtype: 'videoCardGroup'
      },
      {
	xtype: 'moreCardGroup'
      },
      {
	xtype: 'mainTabPanel'
      },
      {
	xtype: 'facebookCardGroup'
      }
    ]
  }
});