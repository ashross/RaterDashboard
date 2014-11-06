Ext.define('RaterDashboard.view.maps.Maps', {
  extend: 'Ext.Container',
  xtype: 'maps',
  config: {
    layout: 'fit',
    items: [
      {
	xtype: 'map',
	useCurrentLocation: true,
	mapOptions: {
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  zoom: 14
	}
      }
    ]
  },
  initialize: function() {
    var me = this;
    me.callParent(arguments);
    this.initMap();
  },
  initMap: function() {

    var mapPanel = this.down('map');
    var gMap = mapPanel.getMap();

    Ext.device.Geolocation.getCurrentPosition({
      allowHighAccuracy: true,
      maximumAge: 0,
      success: function(position) {


	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var userLocation = new google.maps.LatLng(lat, lon);
	var userLocationMarker = new google.maps.Marker({
	  position: userLocation,
	  map: gMap,
	  clickable: false
	});
	gMap.setCenter(userLocation);
      },
      failure: function() {
	//Ext.Msg.alert('Error', 'Can\'t Find You!');
      }
    });
  }
});