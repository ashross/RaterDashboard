Ext.define("RaterDashboard.controller.LogoutController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      
      yeslogoutBtn: 'logout #yeslogoutBtnId',
      // main ref
      mainCardGroup: 'mainCardGroup',
      mainToolbar: 'mainCardGroup #mainToolbarId',
      apCentralMainTabPanel: 'apCentralMainTabPanel'

    },
    control: {
      yeslogoutBtn: {
	tap: 'yeslogoutBtnTapped'
      }
    }
  },
  yeslogoutBtnTapped: function () {
    var me = this;
    console.log('logout');
    var data = [
      {
	"name": "Login to RaterApp",
	"iconCls": "loginIcon",
	"type": ""
      },
//	    {
//	      "name": "Raters",
//	      "iconCls": "speakerIcon",
//	      "type": "Rater"
//	    },
//	    {
//	      "name": "Sponsors",
//	      "iconCls": "sponsorIcon",
//	      "type": "Rater"
//	    },
//	    {
//	      "name": "More Info",
//	      "iconCls": "infoIcon",
//	      "type": "Rater"
//	    },
      {
	"name": "Facebook",
	"iconCls": "faceBookIcon",
	"type": "Social"
      },
      {
	"name": "Twitter",
	"iconCls": "twitterIcon",
	"type": "Social"
      }
    ];
    var slideNavListStore = Ext.getStore('slideNavListStore');
    slideNavListStore.removeAll();
    slideNavListStore.setData(data);
    me.getMainToolbar().setTitle('AP Central');
    me.getMainCardGroup().animateActiveItem('apCentralMainTabPanel', {
      type: 'slide',
      direction: 'right'
    });
    me.getApCentralMainTabPanel().setActiveItem('apCentral');
  }
});