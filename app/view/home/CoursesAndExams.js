Ext.define("RaterDashboard.view.home.CoursesAndExams", {
  extend: 'Ext.Container',
  xtype: 'coursesAndExams',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	padding: 10,
	html: 'AP Courses and Exams'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: 'newsListCls',
	itemTpl: [
	  '<div class="headingCls" style="text-decoration: blink;">{title}</div>' +
		  '<div class="">{content}</div>'
	],
	data: [
	  {title: 'In This Section', content: 'In this section of AP Central you can access information about the courses you teach. Here you will find the official AP Course Descriptions, sample syllabi, and the Course Home Page for each AP course.  You will also find Exam Questions from previous years from all AP courses.'},
	  {title: 'The Courses', content: '<p>The AP Program currently offers more than 30 courses across multiple subject areas. Each course is developed by a committee composed of college faculty and AP teachers, and covers the breadth of information, skills, and assignments found in the corresponding college course.</p><p>AP courses are taught by highly qualified high school teachers who use the AP Course Descriptions to guide them. The Course Description for each discipline outlines the course content, describes the curricular goals of the subject, and provides sample examination questions. While the Course Descriptions are a significant source of information about the course content on which the AP Exams will be based, AP teachers have the flexibility to determine how this content is presented. Published in the spring of the school year before the course will be taught, the Course Descriptions are available in this section of AP Central, accompanied by a course perspective written by an experienced AP teacher. These perspectives represent the personal viewpoints and teaching styles of their authors; however, we hope they will provide insight and inspiration for other educators.</p>'},
	  {title: 'The Exams', content: '<p>The AP Examinations are administered each year in May and represent the culmination of college-level work in a given discipline in a secondary school setting. Rigorously developed by committees of college and AP high school faculty, the AP Exams test students ability to perform at a college level.</p><p>Development Committees meet throughout the year to create new exams, which each contain a free-response section (either essay or problem solving) and a section of multiple-choice questions. (The only subject that does not follow this format is AP Studio Art, which is a portfolio assessment.) The world language exams also have a speaking component, and the AP Music Theory Exam includes a sight-singing task. The multiple-choice questions are scored by computer, while the free-response portions are evaluated by a team of skilled college professors and high school teachers who meet annually to score exams in their subject area. The involvement of college faculty at all levels of exam development and scoring ensures that the AP Exams truly reflect college-level achievement. Students who perform well can receive course credit and/or advanced standing at thousands of universities worldwide. </p>'}
	]
      }
    ]
  }
});
