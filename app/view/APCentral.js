Ext.define("RaterDashboard.view.APCentral", {
  extend: 'Ext.Container',
  xtype: 'apCentral',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    cls: 'apCentralCls',
    items: [
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'AP Central'
      },
      {
	xtype: 'container',
	cls: 'containerImgBlockCls',
	layout: 'hbox',
	items: [
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/exploreap.jpg" /></div>' +
		      '<div class="headingCls">Explore AP</div>' +
		      '<div class="contentCls">See what students are saying about AP and how it helps them prepare for college and beyond.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'https://apstudent.collegeboard.org/exploreap';
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
	      }
	    ]
	  },
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/apca-2014.gif" /></div>' +
		      '<div class="headingCls">AP Course Audit</div>' +
		      '<div class="contentCls">AP Course Audit is accepting submissions for new courses that will be offered in the 2014-15 school year.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'http://www.collegeboard.com/html/apcourseaudit/';
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
	      }
	    ]
	  },
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/apcentral_spotlight_Reader2014.gif" /></div>' +
		      '<div class="headingCls">Now accepting applications</div>' +
		      '<div class="contentCls">Join over 12,000 college faculty members and AP teachers at the 2015 AP Exam Reading.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'http://apcentral.collegeboard.com/apc/public/homepage/4137.html';
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
	      }
	    ]
	  }
	]
      },
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'News'
      },
      {
	xtype: 'dataview',
	store: 'newsStore',
	scrollable: null,
	cls: 'newsListCls',
	itemId: 'newsListId',
	itemTpl: [
	  '<div class="headingCls">{title}</div>' +
		  '<div class="contentCls">{content}</div>'
	]
      }
    ]
  }
});