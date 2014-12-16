Ext.define('RaterDashboard.model.TwitterHomeTimeline', {
    extend: 'Ext.data.Model',
    config: {
		//identifier: 'uuid',
		fields: [
			"id",
			"created_at",
			"text",
			"user",
			"entities"
		]
		
    }
});