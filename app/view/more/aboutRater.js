Ext.define("RaterDashboard.view.more.AboutRater", {
  extend: 'Ext.Container',
  xtype: 'aboutRater',
  config: {
    scrollable:'vertical',
    styleHtmlContent: true,
    items: [
      {
	xtype: 'panel',
	padding:10,
	html: 'The College Board is a mission-driven not-for-profit organization that connects students to college success and opportunity.'
      },
      {
	xtype: 'panel',
	padding:10,
	html: 'Founded in 1900, the College Board was created to expand access to higher education. Today, the membership association is made up of over 6,000 of the world’s leading educational institutions and is dedicated to promoting excellence and equity in education.'
      },
      {
	xtype: 'panel',
	padding:10,
	html: 'Each year, the College Board helps more than seven million students prepare for a successful transition to college through programs and services in college readiness and college success — including the SAT and the Advanced Placement Program. The organization also serves the education community through research and advocacy on behalf of students, educators and schools.'
      }
    ]
  }
});
