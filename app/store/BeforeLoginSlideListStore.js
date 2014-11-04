Ext.define('RaterDashboard.store.BeforeLoginSlideListStore', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.BeforeLoginSlideList',
    storeId: 'beforeLoginSlideListStore',
    sorters: 'type',
    grouper: {
      groupFn: function(item) {
	return item.get('type');
      }
    },
    autoLoad: true,
    data: [
      {
	name: 'Login to RaterApp',
	iconCls: 'loginIcon',
	type: ''
      },
      {
	name: 'Raters',
	iconCls: 'speakerIcon',
	type: 'Rater'
      },
      {
	name: 'Sponsors',
	iconCls: 'sponsorIcon',
	type: 'Rater'
      },
      {
	name: 'More Info',
	iconCls: 'infoIcon',
	type: 'Rater'
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
