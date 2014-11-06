Ext.define('RaterDashboard.store.Videos', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.Video',
    storeId: 'videoStore',
    autoLoad: true,
    autoSync: true,
    data:[
      {title:'What happens at the AP Reading?', url:'resources/data/videos/AP_Reader_Recruitment_What.mp4', poster:'resources/images/videoThumbnails-01.jpg'},
      {title:'How do I apply?', url:'resources/data/videos/AP_Reader_Recruitment_How.mp4', poster:'resources/images/videoThumbnails-02.jpg'},
      {title:'What makes the AP Reading so special?', url:'resources/data/videos/AP_Reader_Recruitment_Testimonial.mp4', poster:'resources/images/videoThumbnails-03.jpg'}
    ]
  }
});