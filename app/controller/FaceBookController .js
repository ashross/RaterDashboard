Ext.define("RaterDashboard.controller.FaceBookController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      facebookCardGroup: 'facebookCardGroup',
      facebookLoginForm: 'facebookLogin',
      faceBookBtn: 'facebookLogin #faceBookBtnId',
      faceBookPostBtn: 'facebookActivity #faceBookPostBtnId',
      faceBookPhotoBtn: 'facebookActivity #faceBookPhotoBtnId',
      faceBookInviteFriendsBtn: 'facebookActivity #faceBookInviteFriendsBtnId',
      slideNavList: 'main #slideNavListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId'
    },
    control: {
      faceBookBtn: {
	       tap: 'faceBookBtnTapped'
      },
      faceBookPostBtn: {
          tap: 'faceBookPostBtnTapped'
      },
      faceBookPhotoBtn: {
          tap: 'faceBookPhotoBtnTapped'
      },
      faceBookInviteFriendsBtn: {
          tap: 'faceBookInviteFriendsBtnTapped'
      }
    }
  },
  faceBookBtnTapped: function () {
    var me = this;
    console.log('tapped');
    // if (!window.cordova) {
		        // Initialize - only executed when testing in the browser.
	             //facebookConnectPlugin.browserInit('992961657386602');
	     // }
      //alert(typeof facebookConnectPlugin);
      fblogin();

  },

  faceBookPostBtnTapped: function(){
      window.plugins.socialsharing.shareViaFacebook(
          '',
           null /* img */, 
           null /* url */, 
           function() {
              alert("Message posted");
              console.log('share ok')
            },
           function(errormsg){
              alert("error");
              alert(JSON.stringify(errormsg));
          });
      //fbPostText();
  },

  faceBookPhotoBtnTapped: function(){
      var me = this;
      me.openLibraryAndShareImage();
  },

  success: function (Obj) {
    var eventId = Obj;

    var me = this;
    alert('in success');
    console.log('success ' + obj);

    return true;

  },
  /**
   * @method error
   *error event for create and open calendar event
   */

  error: function (sub) {
    //alert('in failure');
    console.log('error' + sub);
  },
  createCalendar: function () {
    //alert('entering createCalendar');
    var me = this;
    var EventObj = {
      "title": 'Rater Appointment',
      "startDate": new Date(),
      "endDate": new Date(),
      "desc": "Rater Appointment Test",
      "location": 'Madrid'
    };
    window.plugins.AndroidCalendar.addCalendarEvent(EventObj, me.success, me.error);

  },

  openLibraryAndShareImage: function(){
    //alert("in openLibraryAndShareImage");
    var me = this;
    navigator.camera.getPicture(me.onSuccess, me.onFail, { 
      quality: 70,
      destinationType: Camera.DestinationType.NATIVE_URI,
      sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit : true,
      encodingType: Camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    });
  },

  onFail: function(){
    alert("Please try again...")
  },

  onSuccess: function(imageData) {
    //alert("in login success");
    var me = this;
    //alert("imageData: " + imageData);
    //var image = document.getElementById('myImage');
    //image.src = imageData;   //"data:image/jpeg;base64," + imageData;
    //alert("accessToken localStorage: " + localStorage.getItem("fbAccessToken"));
    setImageUploadOptions(localStorage.getItem("fbAccessToken"), imageData);
    
    /*
          plugin.login(function(response) {
            alert("accessToken: " + response.accessToken);
            me.setImageUploadOptions(response.accessToken,imageData);
          }, function(){
            alert("Error in fb login")
          });
  */
  },

  //https://graph.facebook.com/me/home?access_token=CAACEdEose0cBAAqfD5OQKRXvwXb3PBZBL0Pxk2nqFSarvdRuoiaOS4ZAuC7AVFrxCrfqXvZC02qsZBr6NkQjITa8YEHqCFSApBaMZB1gbl3qiCEry2ZAzS87e4wg2ZBPZBaUCoJJBDKkg7sWLD6svlUtUSS7qx9H84ZAIZCmRxoSq4ZA0nLgwD1wJptTZBG9gobLdd1mDBzGbgoX126BQ4fAKVpi
  fbHomePageFeedCCSoft: function(accessToken){
    //alert("accessToken api call:  " + accessToken);
    Ext.Ajax.request({
        url: 'https://graph.facebook.com/me/home?limit=15&access_token=' + accessToken,
        method: "GET",
        success: function(response, opts) {
            //alert("Done done done")
            var fbData = Ext.decode(response.responseText);
            fbData = fbData.data;
            var fbStore = Ext.getStore('FBHomePageFeeds');
            var dataArr = [];
            alert("data count :  " + fbData.length);
            for(var i=0; i < fbData.length; i++){
                console.log(fbData[i].from.name);
                dataArr.push({
                    name:     fbData[i].from.name,
                    uid:     fbData[i].from.id,
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
  },

  faceBookInviteFriendsBtnTapped: function(){  //(paggingUrl){
    var accessToken = localStorage.getItem('fbaccessToken');
    var fbUrl = 'https://graph.facebook.com/me?fields=id,name,friends.limit(5000)&access_token=' + accessToken;
    /*if(paggingUrl){
        fbUrl = paggingUrl;
    } */
    Ext.Ajax.request({
        url: fbUrl,
        method: "GET",
        success: function(response, opts) {
            //alert("Done done done")
            fbData = Ext.decode(response.responseText);
            fbData = fbData.friends.data;
            fbFriendsStore = Ext.getStore('FBFriendsList');
            dataArr = [];
            alert("data count :  " + fbData.length);
            
            for(var i=0; i < fbData.length; i++){
                dataArr.push({
                    name:     fbData[i].name,
                    uid:     fbData[i].id
                 });
            }
            fbFriendsStore.add(dataArr);
            Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('facebookFriendsList');
        },
        failure: function(response, opts) {
            alert("fail")
            console.log('server-side failure with status code ' + response.status);
        }
    });
  }

});
function validateEmail(checkEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(checkEmail);
}

  function setImageUploadOptions(accessToken, imageData) {
    //alert("in set image options");
    var options = new FileUploadOptions();
    options.fileKey="source";
    options.mimeType="image/png";
    var params = new Object();
    params.message = "";//" Share Test";
    options.params = params;
    var url = "https://graph.facebook.com/me/photos?access_token=" + accessToken;//fbObj.accessToken;
    shareImageToFB(url, options, imageData);
  }
  
  function shareImageToFB(URL, OPTIONS, imageData){
      //alert("in share image path: " + imageData);
      //var image = document.getElementById('myImage');
      //var path = image.src;
      var path = imageData;
      OPTIONS.fileName=path.substr(path.lastIndexOf('/')+1);
      //progressText = document.getElementById('progressId');
      //progressText.innerHTML = "0% / 100%";
      var ft = new FileTransfer();
   /*   ft.onprogress = function(progress){
        var per = Math.floor((progress.loaded / progress.total) * 100);
        progressText.innerHTML = "" + per + "% / 100%";
      }
      */
      ft.upload(path,encodeURI(URL), function(obj){
          alert('Image Succesfully Uploaded.');
        }, function(fail){
          alert('Failed to Share Image, Please Retry Again');
      }, OPTIONS,true);
  }
