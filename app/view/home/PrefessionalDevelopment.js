Ext.define("RaterDashboard.view.home.PrefessionalDevelopment", {
  extend: 'Ext.Container',
  xtype: 'prefessionalDevelopment',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'AP & Pre-AP Professional Development Workshops and Institutes'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: 'contentListCls',
	itemTpl: [
	  '<div class="">{content}</div>'
	],
	data: [
	  {content: 'Led by experienced instructors, subject-specific AP workshops provide educators with the support and training needed to develop effective strategies for teaching an AP course. Specialized in-person workshops are available for:'}
	]
      }
    ]
  }
});