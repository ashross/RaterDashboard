Ext.define('RaterDashboard.store.NewsStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.News',
    storeId: 'newsStore',
    autoLoad: true,
    data: [
      {
	title: 'APAC 2015 Call for Proposals',
	content: 'Submit a proposal for the AP Annual Conference 2015.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'Whats Changing in AP',
	content: 'Learn more about upcoming changes to AP courses and exams.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'Online Scores Access Schedule for Educators',
	content: 'Find out when educators at your school or district can access 2014 score reports this summer.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'New Resources for U.S. History',
	content: 'Access additional resources for the course including planning tools, practice exams, and more. ',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'Share AP',
	content: 'Build participation in your AP program with outreach materials for students and parents in English and Spanish.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'The College Board Alignment to Californias LCAP',
	content: 'The College Board is partnering with districts across California to develop Local Control and Accountability Plans (LCAPs) that will close the achievement gap and deliver opportunity to all students in the state.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'AP Chemistry Webcast',
	content: 'An on-demand, self-paced webcast exploring photoelectron spectroscopy (PES), a topic included in the AP Chemistry course, is now available from the course home page.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      },
      {
	title: 'AP Spanish Language and Culture Webcast',
	content: 'A recorded webcast that offers strategies for teaching the AP Spanish Language and Culture course is now available from the course home page.',
	url:'http://apac.collegeboard.org/call-for-proposals?AffiliateID=14&BannerID=W5240_CallForProposalBanner_9_18'
      }
    ]
  }
});