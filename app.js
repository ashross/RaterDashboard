Ext.application({
  name: 'RaterDashboard',
  requires: [
    'Ext.MessageBox',
    'Ext.Container',
    'Ext.MessageBox',
    'Ext.Panel',
    'Ext.Toolbar',
    'Ext.TitleBar',
    'Ext.form.FieldSet',
    'Ext.field.Email',
    'Ext.field.Password',
    'Ext.device.Geolocation',
    'Ext.Map',
    'Ext.Video',
    'RaterDashboard.Utilities'
  ],
  views: [
    'Main',
    'MainCardGroup',
    'RaterDashboard.view.NavigationList'
  ],
  controllers: [
    'LoginController',
    'SlideNavController',
    'HomeController',
    'MoreController',
    'MainController',
    'RaterController'
  ],
  stores: [
    'SlideNavListStore',
    'Raters',
    'NewsStore',
    'Videos'
  ],
  models: [
    'SlideNavList',
    'Rater',
    'News',
    'Video'
  ],
  icon: {
    '57': 'resources/icons/Icon.png',
    '72': 'resources/icons/Icon~ipad.png',
    '114': 'resources/icons/Icon@2x.png',
    '144': 'resources/icons/Icon~ipad@2x.png'
  },
  isIconPrecomposed: true,
  startupImage: {
    '320x460': 'resources/startup/320x460.jpg',
    '640x920': 'resources/startup/640x920.png',
    '768x1004': 'resources/startup/768x1004.png',
    '748x1024': 'resources/startup/748x1024.png',
    '1536x2008': 'resources/startup/1536x2008.png',
    '1496x2048': 'resources/startup/1496x2048.png'
  },
  launch: function() {

    Ext.getBody().insertHtml('beforeEnd', '<div id="fb-root" style="display: none;"></div>');

    window.fbAsyncInit = function() {
      FB.init({
	appId: '992961657386602',
	status: true,
	cookie: true,
	xfbml: true
      });

      FB.Event.subscribe('auth.authResponseChange', function(response) {
	if (response.status === 'connected') {
	  console.log('connected');
	  testAPI();
	} else if (response.status === 'not_authorized') {
	  console.log('not_authorized');
	  FB.login();
	} else {
	  console.log('else with login');
	  FB.login();
	}
      });
    };
    // Load the SDK asynchronously
    (function(d) {
      var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
      if (d.getElementById(id)) {
	return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";
      ref.parentNode.insertBefore(js, ref);
    }(document));

    function testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me', function(response) {
//				CafeTribes.app.getController('UsersController').userLoginFromFacebook(response);
	console.log(response);
      }, {scope: 'email'});
    }



//    Ext.getBody().insertHtml('beforeEnd', '<div id="fb-root" style="display: none;"></div>');
//    window.fbAsyncInit = function() {
//      FB.init({
//	appId: '992961657386602',
//	status: true,
//	cookie: true,
//	xfbml: true
//      });

//      FB.Event.subscribe('auth.authResponseChange', function(response) {
//	if (response.status === 'connected') {
//	  console.log('connected');
//	  testAPI();
//	} else if (response.status === 'not_authorized') {
//	  console.log('not_authorized');
//	  FB.login();
//	} else {
//	  console.log('else with login');
//	  FB.login();
//	}
//      });
//    };
//
//    (function(d, s, id) {
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {
//	return;
//      }
//      js = d.createElement(s);
//      js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

//    function testAPI() {
//      console.log('Welcome!  Fetching your information.... ');
//      FB.api('/me', function(response) {
//	RaterDashboard.app.getController('UsersController').userLoginFromFacebook(response);
//      }, {scope: 'email'});
//    }



    // Destroy the #appLoadingIndicator element
//    Ext.fly('appLoadingIndicator').destroy();
    Ext.select('.appLoadingIndicator').removeCls('loading');

    // Initialize the main view
    Ext.Viewport.add(Ext.create('RaterDashboard.view.Main'));
  },
  onUpdated: function() {
    Ext.Msg.confirm(
	    "Application Update",
	    "This application has just successfully been updated to the latest version. Reload now?",
	    function(buttonId) {
	      if (buttonId === 'yes') {
		window.location.reload();
	      }
	    }
    );
  }
});
