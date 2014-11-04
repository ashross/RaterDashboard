Ext.define('RaterDashboard.store.AfterLoginSlideListStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.BeforeLoginSlideList',
    storeId: 'afterLoginSlideListStore',
    sorters: 'type',
    grouper: {
      groupFn: function(item) {
	return item.get('type');
      }
    },
    autoLoad: true,
    autoSync: true,
    data: [
      {
	name: 'Logout to RaterApp',
	iconCls: 'logoutIcon',
	type: ''
      },
      {
	name: 'Rater Home',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'AP Courses and Exams',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'PRE-AP &reg;',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'Prefessional Development',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'AP Teacher Community',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'Become and AP Reader',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'Videos',
	iconCls: 'raterNavListCls',
	type: 'AP Rater'
      },
      {
	name: 'Schedule',
	iconCls: 'scheduleIcon',
	type: 'AP Rater'
      },
      {
	name: 'Raters',
	iconCls: 'speakerIcon',
	type: 'AP Rater'
      },
      {
	name: 'Sponsors',
	iconCls: 'sponsorIcon',
	type: 'AP Rater'
      },
      {
	name: 'Maps',
	iconCls: 'mapIcon',
	type: 'AP Rater'
      },
      {
	name: 'More Info',
	iconCls: 'infoIcon',
	type: 'AP Rater'
      },
      {
	name: 'Facebook',
	iconCls: 'faceBookIcon',
	type: 'Social'
      },
      {
	name: 'Twitter',
	iconCls: 'twitterIcon',
	type: 'Social'
      }
    ]
  }
});