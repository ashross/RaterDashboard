Ext.define("RaterDashboard.view.APCentral", {
  extend: 'Ext.DataView',
  xtype: 'apCentral',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	docked: 'top',
	cls: 'pageHeadingCls',
	html: 'AP Central'
      },
      {
	xtype: 'dataview',
	store: null,
	data: [
	  {imgSrc: 'resources/images/exploreap.jpg', headingLink: 'Explore AP', content: 'See what students are saying about AP and how it helps them prepare for college and beyond.', url: 'https://apstudent.collegeboard.org/exploreap'},
	  {imgSrc: 'resources/images/apca-2014.gif', headingLink: 'AP Course Audit', content: 'AP Course Audit is accepting submissions for new courses that will be offered in the 2014-15 school year.', url: 'http://www.collegeboard.com/html/apcourseaudit/'},
	  {imgSrc: 'resources/images/apcentral_spotlight_Reader2014.gif', headingLink: 'Now accepting applications', content: 'Join over 12,000 college faculty members and AP teachers at the 2015 AP Exam Reading.', url: 'http://apcentral.collegeboard.com/apc/public/homepage/4137.html'}
	],
	scrollable: null,
	cls: 'APCentralListCls',
	itemId: 'APCentralListId',
	inline: true,
	itemTpl: [
	  '<div><img src="{imgSrc}" /></div>' +
		  '<div class="headingCls">{headingLink}</div>' +
		  '<div class="contentCls">{content}</div>'
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	style: 'font-size:20px;',
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