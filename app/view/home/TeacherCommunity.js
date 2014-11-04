Ext.define("RaterDashboard.view.home.TeacherCommunity", {
  extend: 'Ext.Container',
  xtype: 'teacherCommunity',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	padding: 10,
	html: 'About the AP Teacher Community'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: 'newsListCls',
	itemTpl: [
		  '<div class="">{content}</div>'
	],
	data: [
	  {content: 'The AP Teacher Community is where AP teachers discuss teaching strategies, share resources, and connect with each other. We currently support all AP courses and AP Coordinators through 30 communities.'},
	  {content: '<a href="javascript:commuityFn()">Join the AP Teacher Community! </a>'},
	  {content: '<p>The AP Examinations are administered each year in May and represent the culmination of college-level work in a given discipline in a secondary school setting. Rigorously developed by committees of college and AP high school faculty, the AP Exams test students ability to perform at a college level.</p><p>Development Committees meet throughout the year to create new exams, which each contain a free-response section (either essay or problem solving) and a section of multiple-choice questions. (The only subject that does not follow this format is AP Studio Art, which is a portfolio assessment.) The world language exams also have a speaking component, and the AP Music Theory Exam includes a sight-singing task. The multiple-choice questions are scored by computer, while the free-response portions are evaluated by a team of skilled college professors and high school teachers who meet annually to score exams in their subject area. The involvement of college faculty at all levels of exam development and scoring ensures that the AP Exams truly reflect college-level achievement. Students who perform well can receive course credit and/or advanced standing at thousands of universities worldwide. </p>'}
	]
      }
    ]
  }
});
function commuityFn(){
  var url = 'https://apcommunity.collegeboard.org/';
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