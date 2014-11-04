Ext.define("RaterDashboard.view.home.APReader", {
  extend: 'Ext.Container',
  xtype: 'apReader',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	padding: 10,
	style:'font-size: 15px;',
	html: 'The AP Reading'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: '',
	padding: 10,
	style:'font-size: 13px;',
	itemTpl: [
		  '<div class="">{content}</div>'
	],
	data: [
	  {content: 'Each June, AP teachers and college faculty members from around the world gather in the United States to evaluate and score the free-response sections of the AP Exams. AP Exam Readers are led by a Chief Reader, a college professor who has the responsibility of ensuring that students receive scores that accurately reflect college-level achievement. More than 12,000 teachers and college faculty participated in the 2014 Reading. Secondary school Readers can receive certificates awarding professional development hours and continuing education units (CEUs). In addition, Readers are provided with an honorarium of $1,639 and their travel expenses, lodging, and meals are covered.'}
	]
      }
    ]
  }
});