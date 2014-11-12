Ext.define("RaterDashboard.controller.APCentralController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      // News view
      newsList: 'mainCardGroup #newsListId',
      APCentralList: 'mainCardGroup #APCentralListId',
      
    },
    control: {
      newsList: {
	itemtap: 'newsListTapped'
      },
      APCentralList: {
	itemtap: 'APCentralListTapped'
      }
    }
  },
  init: function (application) {
//    GLOB.f.loadMask();
    var data = [
      {
	"name": "Login to RaterApp",
	"iconCls": "loginIcon",
	"type": ""
      },
//      {
//	"name": "Raters",
//	"iconCls": "speakerIcon",
//	"type": "Rater"
//      },
//      {
//	"name": "Sponsors",
//	"iconCls": "sponsorIcon",
//	"type": "Rater"
//      },
//      {
//	"name": "More Info",
//	"iconCls": "infoIcon",
//	"type": "Rater"
//      },
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
//    Ext.Ajax.request({
//      url: 'resources/data/beforeLoginSlideList.json',
//      method: 'GET',
//      success: function (response) {
//	Ext.Viewport.unmask();
//	var responseJason = JSON.parse(response.responseText);
//	console.log('-------Response---------');
//	console.log(responseJason);
//	console.log('----------------');
    var slideNavListStore = Ext.getStore('slideNavListStore');
    slideNavListStore.setData(data);
//	console.log('-------Store---------');
//	console.log(slideNavListStore);
//	console.log('----------------');
//      },
//      failure: function (response) {
//	Ext.Viewport.unmask();
//      }
//    });
  },
  newsListTapped: function (list, index, target, record, e, eOpts) {
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
  },
  APCentralListTapped: function (list, index, target, record, e, eOpts) {
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