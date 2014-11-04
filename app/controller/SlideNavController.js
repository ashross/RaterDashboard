Ext.define("RaterDashboard.controller.SlideNavController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainCardGroup: 'mainCardGroup',
      slideNavList: 'main #slideNavListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId',
      // Home card group
      homeCardGroup: 'homeCardGroup',
      // Main Tab Panel
      mainTabPanel:'mainTabPanel'
      
    },
    control: {
      navBtn: {
	tap: 'toggleNav'
      },
      slideNavList: {
	itemtap: 'slideNavListTapped'
      }
    }
  },
  /**
   * Toggle the slide navogation view
   */
  toggleNav: function() {
    var me = this;
    var mainEl = me.getMainCardGroup().element;
    if (mainEl.hasCls('out')) {
      mainEl.removeCls('out').addCls('in');
      me.getMainCardGroup().setMasked(false);
    } else {
      mainEl.removeCls('in').addCls('out');
      me.getMainCardGroup().setMasked(true);
    }
  },
  slideNavListTapped: function(list, index, target, record, e, eOpts) {
    var me = this;
    me.toggleNav();
    if (record.data.name === 'Login to RaterApp') {
      me.getMainToolbar().setTitle('Login');
      me.getMainCardGroup().animateActiveItem('login', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'Maps') {
      me.getMainToolbar().setTitle(record.data.name);
      me.getMainCardGroup().animateActiveItem('maps', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'More Info') {
      me.getMainToolbar().setTitle(record.data.name);
      me.getMainCardGroup().animateActiveItem('moreCardGroup', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'Raters') {
      GLOB.f.loadMask();
      Ext.Ajax.request({
	url: 'resources/data/raterData.json',
	method: 'GET',
	success: function(response) {
	  Ext.Viewport.unmask();
	  var responseJason = JSON.parse(response.responseText);
	  console.log(responseJason);
	  var speakers = Ext.getStore('raterStore');
	  speakers.setData(responseJason);
	  me.getMainToolbar().setTitle(record.data.name);
	  me.getMainCardGroup().animateActiveItem('rater', {
	    type: 'slide',
	    direction: 'left'
	  });
	},
	failure: function(response) {
	  console.log(response);
	  Ext.Viewport.unmask();
	  Ext.Msg.alert('Failure', "Please check your internet connection.");
	}
      });

    } else if (record.data.name === 'Sponsors') {
      me.getMainToolbar().setTitle(record.data.name);
      me.getMainCardGroup().animateActiveItem('sponsor', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'Logout to RaterApp') {
      Ext.Msg.confirm('Alert', 'Are you sure you want to Logout?', function(id, value) {
	if (id === 'yes') {
	  console.log('logged out');
	  console.log('first time ' + me.getSlideNavList().getGrouped());
	  me.getSlideNavList().setGrouped(false);
	  console.log('second time ' + me.getSlideNavList().getGrouped());

	  me.getSlideNavList().setStore('beforeLoginSlideListStore');
	  me.getSlideNavList().setGrouped(true);
	  console.log('third time ' + me.getSlideNavList().getGrouped());
	  me.getSlideNavList().refresh();
	  me.getMainToolbar().setTitle('News');
	  me.getMainCardGroup().animateActiveItem('news', {
	    type: 'slide',
	    direction: 'right'
	  });
	}
      }, this);
      return false;
    } else if (record.data.name === 'Facebook') {
      me.getMainToolbar().setTitle('Facebook Login');
      me.getMainCardGroup().animateActiveItem('facebookCardGroup', {
	type: 'slide',
	direction: 'left'
      });
    } else if (record.data.name === 'Videos') {
      me.getMainToolbar().setTitle(record.data.name);
      me.getMainCardGroup().animateActiveItem('videoCardGroup', {
	type: 'slide',
	direction: 'left'
      });
//      me.getHomeCardGroup().setActiveItem();
    } else if (record.data.name === 'Rater Home') {
      me.getMainToolbar().setTitle('Home');
      me.getMainTabPanel().setActiveItem(0);
      me.getMainCardGroup().animateActiveItem('mainTabPanel', {
	type: 'slide',
	direction: 'left'
      });
      me.getHomeCardGroup().setActiveItem(0);
    } else if (record.data.name === 'AP Courses and Exams') {
      me.getMainToolbar().setTitle('Courses & Exams');
//      coursesAndExams
      me.getMainCardGroup().animateActiveItem('mainTabPanel', {
	type: 'slide',
	direction: 'left'
      });
      console.log(me.getMainTabPanel().getActiveItem().getActiveItem());
      me.getMainTabPanel().setActiveItem(0);
//      me.getMainCardGroup().animateActiveItem('homeCardGroup', {
//	type: 'slide',
//	direction: 'left'
//      });
      me.getHomeCardGroup().setActiveItem(1);
    }
  }
});