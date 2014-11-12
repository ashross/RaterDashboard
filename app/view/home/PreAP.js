Ext.define("RaterDashboard.view.home.PreAP", {
  extend: 'Ext.Container',
  xtype: 'preAP',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'Preparing Every Student for College'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: 'contentListCls',
	itemTpl: [
	  '<div class="headingCls" style="text-decoration: blink;">{title}</div>' +
		  '<div class="">{content}</div>'
	],
	data: [
	  {title: '', content: '<p>Pre-AP is based on the following two important premises. The first is the expectation that all students can perform well at rigorous academic levels. This expectation should be reflected in curriculum and instruction throughout the school such that all students are consistently being challenged to expand their knowledge and skills to the next level.</p><p>The second important premise of Pre-AP is the belief that we can prepare every student for higher intellectual engagement by starting the development of skills and acquisition of knowledge as early as possible. Addressed effectively, the middle and high school years can provide a powerful opportunity to help all students acquire the knowledge, concepts, and skills needed to engage in a higher level of learning.</p><p>The College Board supports Pre-AP programs in schools and districts in the following ways:</p>'},
	  {title: 'Pre-AP Professional Development', content: '<p>The College Board offers a suite of Pre-AP professional development resources and services designed to equip all middle and high school teachers with the strategies and tools they need to engage their students in active, high-level learning, thereby ensuring that every middle and high school student develops the skills, habits of mind, and concepts they need to succeed in college. Pre-AP Initiatives is a key component of the College Boards® K-12 Professional Development unit. </p><p>Since Pre-AP teacher professional development supports explicitly the goal of college as an option for every student, it is important to have a recognized standard for college-level academic work. The Advanced Placement Program provides these standards for Pre-AP. Pre-AP teacher professional development resources reflect topics, concepts, and skills found in AP courses.</p><p>Below are links to the Professional Development area of the College Boards web site for professionals. Each subject area includes descriptions of AP and Pre-AP workshops. To schedule a Pre-AP workshop, contact your district representative or email <a href="javascript:emailFn()">sromtgs@collegeboard.org</a> for further assistance.</p>'},
	  {title: 'The Exams', content: '<p>The AP Examinations are administered each year in May and represent the culmination of college-level work in a given discipline in a secondary school setting. Rigorously developed by committees of college and AP high school faculty, the AP Exams test students ability to perform at a college level.</p><p>Development Committees meet throughout the year to create new exams, which each contain a free-response section (either essay or problem solving) and a section of multiple-choice questions. (The only subject that does not follow this format is AP Studio Art, which is a portfolio assessment.) The world language exams also have a speaking component, and the AP Music Theory Exam includes a sight-singing task. The multiple-choice questions are scored by computer, while the free-response portions are evaluated by a team of skilled college professors and high school teachers who meet annually to score exams in their subject area. The involvement of college faculty at all levels of exam development and scoring ensures that the AP Exams truly reflect college-level achievement. Students who perform well can receive course credit and/or advanced standing at thousands of universities worldwide. </p>'}
	]
      }
    ]
  }
});
function emailFn() {
  var emailId = "sromtgs@collegeboard.org";
  var subject = "Pre-AP workshop";
  if (Ext.os.is.Android) {
    window.open('mailto:' + emailId + '?subject=' + subject + '&body=College Board');
  } else {
    window.location.href = "mailto:" + emailId + "?subject=" + subject + "&body=College Board";
  }
}