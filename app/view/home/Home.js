Ext.define("RaterDashboard.view.home.Home", {
  extend: 'Ext.Container',
  xtype: 'home',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	padding: 10,
	style:'border-bottom: 1px solid #ccc;color:#609C00',
	html: 'FEATURED ARTICLES'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable:null,
	cls: 'newsListCls',
	itemId:'homeFeaturedListId',
	itemTpl: [
	  '<div class="headingCls">{title}</div>' +
		  '<div class="contentCls">{content}</div>'
	],
	data: [
	  {title: 'Nine Teachers Leading the Technology Revolution', content: 'This report, in partnership with Phi Delta Kappa International and the National Writing Project, profiles the work of nine dedicated teachers using technology to enhance student engagement across diverse subject and content areas.', url:'https://www.collegeboard.org/advocacy'},
	  {title: 'Teachers Are the Center of Education: Profiles of Eight Teachers ', content: 'This new report, created in partnership with Phi Delta Kappa International, documents a day in the life of eight teachers.  Each of their stories highlights the critical importance of teachers and salutes their great work.', url:'https://www.collegeboard.org/advocacy'}
	]

      },
      {
	xtype: 'panel',
	padding: 10,
	style:'border-bottom: 1px solid #ccc;color:#609C00',
	html: 'EXPLORE AP'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable:null,
	cls: 'newsListCls',
	itemId:'homeExploreListId',
	itemTpl: [
	  '<div class="headingCls">{title}</div>'
	],
	data: [
	  {title: 'AP Exam Dates', url:'http://professionals.collegeboard.com/testing/ap/about/dates'},
	  {title: 'Exam Fees & Fee Reductions', url:'http://professionals.collegeboard.com/testing/ap/about/fees'},
	  {title: 'Students & Parents', url:'https://apstudent.collegeboard.org/home'},
	  {title: 'Resources for AP Coordinators', url:'http://professionals.collegeboard.com/testing/ap'},
	  {title: 'Building Your AP Program', url:'http://professionals.collegeboard.com/k-12/assessment/ap'},
	  {title: 'Information for Colleges & Universities', url:'http://aphighered.collegeboard.org/'}

	]
      }
    ]
  }
});