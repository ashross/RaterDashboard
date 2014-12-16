Ext.define('RaterDashboard.Utilities', {});

var GLOB = {
  v: {},
  f: {}
};

GLOB.v.previousPage = '';
GLOB.v.previousPageTitle = '';


GLOB.f.loadMask = function() {
  var obj = {
    xtype: 'loadmask',
    message: 'Loading...',
    indicator: true
  };
  Ext.Viewport.setMasked(obj);
  Ext.defer(function() {
    Ext.Viewport.setMasked(false);
  }, 8000, this);
};

   // Browser wrapper API ONLY
       var browserInit= function (appId, version) {
            if (!version) {
                version = "v2.0";
            }
            FB.init({
                appId      : '992961657386602',
                cookie     : true,
                xfbml      : true,
                version    : version
            });

    };


var failureCallback = function(e){
    alert("fail");
    alert(JSON.stringify(e));
};

 var fbloginCCSoft = function () {
   //var appId = prompt("Enter FB Application ID", "");
               /*   if (!window.cordova) {
                      //var appId = prompt("Enter FB Application ID", "");
                      facebookConnectPlugin.browserInit('992961657386602');
                  }
                  else
                  {
                    */
                    //alert("ccsoft");
                    plugin = new CC.CordovaFacebook();
                    plugin.init('992961657386602', 'RaterApp', 
                        ['public_profile', 'email', 'publish_actions', 'read_stream', 'user_friends'], 
                        //['email'], 
                        function(response) {
                            //alert("init success");
                            //alert("init response: " + JSON.stringify(response));
                            //if(response) {
                                //console.log("Access token is: " + response.accessToken);
                                //console.log("Expires: " + response.expirationDate);
                                //console.log("Permissions are: " + response.permissions);
                                //alert("Permissions are: " + response.permissions + "  ////    Access token is: " + response.accessToken);
                                plugin.login(function(response) {
                                    //alert("login response: " + JSON.stringify(response));
                                    console.log("Access token is: " + response.accessToken);
                                    console.log("Expires: " + response.expirationDate);
                                    console.log("Permissions are: " + response.permissions);
                                    //alert("login Permissions are: " + response.permissions + "  ////    Access token is: " + response.accessToken);
                                    localStorage.setItem("fbAccessToken", response.accessToken);
                                    Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('facebookActivity');
                                    localStorage.setItem('fbaccessToken',response.accessToken);
                                    RaterDashboard.app.getController('FaceBookController').fbHomePageFeedCCSoft(response.accessToken);
                                    //fbHomePageFeedCCSoft(response.accessToken);
                                    /* plugin.graphCall("me", {"fields": "name,id"}, "GET", function(resp) {
                                          alert("feed response : " + JSON.stringify(resp));
                                           //console.log("My name is: " + resp.name + " and id is: " + resp.id);
                                       },        
                                      failureCallback);  */
                                }, function(e){
                                    failureCallback(e);
                                });
                            //}
                    },  function(e){
                                    failureCallback(e);
                    });
            };

            /*
//https://graph.facebook.com/me/home?access_token=CAACEdEose0cBAAqfD5OQKRXvwXb3PBZBL0Pxk2nqFSarvdRuoiaOS4ZAuC7AVFrxCrfqXvZC02qsZBr6NkQjITa8YEHqCFSApBaMZB1gbl3qiCEry2ZAzS87e4wg2ZBPZBaUCoJJBDKkg7sWLD6svlUtUSS7qx9H84ZAIZCmRxoSq4ZA0nLgwD1wJptTZBG9gobLdd1mDBzGbgoX126BQ4fAKVpi
var fbHomePageFeedCCSoft = function(accessToken){
  alert("accessToken api call:  " + accessToken);
  Ext.Ajax.request({
      url: 'https://graph.facebook.com/me/home?access_token=' + accessToken,
      method: "GET",
      success: function(response, opts) {
          alert("Done done done")
          fbData = Ext.decode(response.responseText);
          fbData = fbData.data;
          fbStore = Ext.getStore('FBHomePageFeeds');
          dataArr = [];
          for(var i=0; i < fbData.length; i++){
              console.log(fbData[i].from.name);
              dataArr.push({
                  name:     fbData[i].from.name,
                  //avatar:  fbData[i].message,
                  message:  fbData[i].message,
                  type:     fbData[i].type,
                  picture:  fbData[i].picture,
                  updated_time: fbData[i].updated_time
               });
          }
          fbStore.add(dataArr);

      },
      failure: function(response, opts) {
          alert("fail")
          console.log('server-side failure with status code ' + response.status);
      }
  });
  
};
*/
var fbLoginJS = function() {

  //fbLoginStatusJS();
  alert("before login");
  alert("FB:  " + FB);
  alert(JSON.stringify(FB));
  //fbGetLikesJS();
  //fbLoginStatusJS();
    FB.login(function(response) {
     if (response.authResponse) {
       console.log('Welcome!  Fetching your information.... ');
       FB.api('/me', function(response) {
          console.log('Good to see you, ' + response.name + '.');
          fbGetUsersPostJS();
          //fbGetLikesJS();
       });
     } else {
       console.log('User cancelled login or did not fully authorize.');
     }
   });
};



var fbGetUsersPostJS = function(){

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
  
     // var uid = response.authResponse.userID;
     // var accessToken = response.authResponse.accessToken;
     // alert("userID :  " + uid + "   ///  accessToken:  " + accessToken);
     alert("in login");

      FB.login(function(response){
          alert(JSON.stringify(response));
       FB.api('/me', 'get',
           {fields: 'id,name,posts'},
           //{fields: 'id,name,posts.limit(10){message,description,icon,picture,link,place},likes'},
           function(resp){
          alert(JSON.stringify(resp));
          console.log(JSON.stringify(resp));
          //a = resp;
          //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('facebookActivity');

       });
      }, {scope: 'read_stream'});
      return response;
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
 });

};

var fbPostTextJS = function(){
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token 
      // and signed request each expire
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;
      alert("userID :  " + uid + "   ///  accessToken:  " + accessToken);
      FB.login(function(){
       FB.api('/me/feed', 'post', {message: 'Hello, world!'});
      }, {scope: 'publish_actions'},function(response){
        alert(JSON.stringify(response));
        fbGetLikesJS();
      });
      return response;
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook, 
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
 });

};

 var fblogin = function () {
    //fbLoginJS();
    //return;
    fbloginCCSoft();
    return;
	 //var appId = prompt("Enter FB Application ID", "");
                  if (!window.cordova) {
                      //var appId = prompt("Enter FB Application ID", "");
                      facebookConnectPlugin.browserInit('992961657386602');
                  }
                  //alert('right here before login');
                  //facebookConnectPlugin.browserInit('992961657386602');
                  facebookConnectPlugin.login( ['public_profile', 'email', "user_likes"], //["ashross.usa@gmail.com"],
                      function (response) {
                          alert(JSON.stringify(response)) 
                          fbLoginSuccess(response);
                       },
                      function (response) {
                      	 alert("fail");
                         alert(JSON.stringify(response)) 
                  });    
            };
 var fbLoginSuccess = function(userData){
      //alert('in login success');
      //alert(JSON.stringify(userData));
      //alert("UserInfo: " + JSON.stringify(userData));
      //alert(userData.authResponse.userID);
      Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('facebookActivity');
      getUserDataFromFB(userData.authResponse);
      //getFeedsFromFB();
  };

var fbPostText = function(userData){
  facebookConnectPlugin.getLoginStatus(
        function (status) {
            //alert("current status: " + JSON.stringify(status));

            var options = { method:"feed" };
            facebookConnectPlugin.showDialog(options,
                function (result) {
                    alert("Posted. " + JSON.stringify(result));                },
                function (e) {
                  alert("Failed: " + e);
            });
        }
    );
};

var getUserDataFromFB = function(userData){
  //alert("in getUserDataFromFB:  " + userId);
  //var url = "https://graph.facebook.com/v2.2/" + userId + "/?fields=likes";
  var userId = userData.userID;
  var accessToken = userData.accessToken
  //var url = "" + userId + "/?fields=likes&access_token=" + accessToken;
  //var url = "me/?fields=likes";// + accessToken;
  var url = "https://graph.facebook.com/v2.2/me/?fields=likes";
  alert(url);
      facebookConnectPlugin.api(
          url,
          ["user_likes",'public_profile', 'email'],
        /*  "me?fields=email,birthday,gender,age_range,education,likes",//String requestPath,
          ["user_about_me","user_activities","user_likes","user_birthday","user_education_history","user_interests","email",
          "user_status","user_actions.books","user_location","user_work_history","user_games_activity","user_relationship_details"],//Array permissions,
        */
          function(response){  //Function success,
              alert("data:  " + JSON.stringify(response));
          },
          function(e){  //Function failure
              alert("Failed: " + e);
          }
      );
};

var getFeedsFromFB = function(){
    facebookConnectPlugin.getLoginStatus(
        function (status) {
            //alert("current status: " + JSON.stringify(status));

          facebookConnectPlugin.api(
                "me/feed?fields=message,from,icon,link,picture",//String requestPath,
                ["email","read_stream"],//Array permissions,
                function(response){  //Function success,
                    alert(JSON.stringify(response));
                },
                function(e){  //Function failure
                    alert("Failed: " + e);
                } 
            );
        }
    );
};
             var showDialog = function () {
			                facebookConnectPlugin.showDialog( { method: "feed" },
			                    function (response) { alert(JSON.stringify(response)) },
			                    function (response) { alert(JSON.stringify(response)) });
			            };

			            var apiTest = function () {
			                facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
			                    function (response) { alert(JSON.stringify(response)) },
			                    function (response) { alert(JSON.stringify(response)) });
			            };

			            var getAccessToken = function () {
			                facebookConnectPlugin.getAccessToken(
			                    function (response) { alert(JSON.stringify(response)) },
			                    function (response) { alert(JSON.stringify(response)) });
			            };

			            var getStatus = function () {
			                facebookConnectPlugin.getLoginStatus(
			                    function (response) { alert(JSON.stringify(response)) },
			                    function (response) { alert(JSON.stringify(response)) });
			            };

			            var logout = function () {
			                facebookConnectPlugin.logout(
			                    function (response) { alert(JSON.stringify(response)) },
			                    function (response) { alert(JSON.stringify(response)) });
                             };