Ext.define('RaterDashboard.Utilities', {});

var GLOB = {
  v: {},
  f: {}
};

GLOB.v.previousPage = '';
GLOB.v.previousPageTitle = '';


GLOB.f.loadMask = function () {
  var obj = {
    xtype: 'loadmask',
    message: 'Loading...',
    indicator: true
  };
  Ext.Viewport.setMasked(obj);
  Ext.defer(function () {
    Ext.Viewport.setMasked(false);
  }, 8000, this);
};

// Browser wrapper API ONLY
var browserInit = function (appId, version) {
  if (!version) {
    version = "v2.0";
  }
  FB.init({
    appId: '992961657386602',
    cookie: true,
    xfbml: true,
    version: version
  });

};

var fblogin = function () {
  //var appId = prompt("Enter FB Application ID", "");
  if (!window.cordova) {
    //var appId = prompt("Enter FB Application ID", "");
    facebookConnectPlugin.browserInit('992961657386602');
  }
  alert('right here before login is '+ typeof(facebookConnectPlugin)+ ' is the value');
  if (typeof(facebookConnectPlugin) != 'undefined'
     && facebookConnectPlugin != null ) 
  //facebookConnectPlugin.browserInit('992961657386602');
  facebookConnectPlugin.login(["ashross.usa@gmail.com"],
	  function (response) {
	    alert('coming here after');
	    alert(JSON.stringify(response))
	  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};

var showDialog = function () {
  facebookConnectPlugin.showDialog({method: "feed"},
  function (response) {
    alert(JSON.stringify(response))
  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};

var apiTest = function () {
  facebookConnectPlugin.api("me/?fields=id,email", ["user_birthday"],
	  function (response) {
	    alert(JSON.stringify(response))
	  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};

var getAccessToken = function () {
  facebookConnectPlugin.getAccessToken(
	  function (response) {
	    alert(JSON.stringify(response))
	  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};

var getStatus = function () {
  facebookConnectPlugin.getLoginStatus(
	  function (response) {
	    alert(JSON.stringify(response))
	  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};

var logout = function () {
  facebookConnectPlugin.logout(
	  function (response) {
	    alert(JSON.stringify(response))
	  },
	  function (response) {
	    alert(JSON.stringify(response))
	  });
};