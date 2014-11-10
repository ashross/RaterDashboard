Ext.define("RaterDashboard.controller.LoginController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainCardGroup: 'mainCardGroup',
      loginForm: 'login',
      loginBtn: 'login #loginBtnId',
      slideNavList: 'main #slideNavListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId'
    },
    control: {
      loginBtn: {
	tap: 'loginBtnTapped'
      }
    }
  },
  loginBtnTapped: function () {
    var me = this;
    var loginFormRef = me.getLoginForm().getValues();
    if (loginFormRef.email === '') {
      Ext.Msg.alert('Error', "Please enter email address.");
    } else if (!validateEmail(loginFormRef.email)) {
      Ext.Msg.alert('Error', "Please enter valide email address.");
    } else if (loginFormRef.password === '') {
      Ext.Msg.alert('Error', "Please enter password");
    } else if (loginFormRef.email !== 'test@gmail.com') {
      Ext.Msg.alert('Error', "Email doesn't exist");
    } else if (loginFormRef.password !== '123') {
      Ext.Msg.alert('Error', "Password is wrong");
    } else {
      console.log('loggedin');
      var data = [
	{
	  "name": "Logout to RaterApp",
	  "iconCls": "logoutIcon",
	  "type": ""
	},
	{
	  "name": "Rater Home",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "AP Courses and Exams",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "PRE-AP &reg;",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "Prefessional Development",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "AP Teacher Community",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "Become and AP Reader",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "Videos",
	  "iconCls": "raterNavListCls",
	  "type": "AP Rater"
	},
	{
	  "name": "Schedule",
	  "iconCls": "scheduleIcon",
	  "type": "AP Rater"
	},
//	{
//	  "name": "Raters",
//	  "iconCls": "speakerIcon",
//	  "type": "AP Rater"
//	},
//	{
//	  "name": "Sponsors",
//	  "iconCls": "sponsorIcon",
//	  "type": "AP Rater"
//	},
//	{
//	  "name": "Maps",
//	  "iconCls": "mapIcon",
//	  "type": "AP Rater"
//	},
	{
	  "name": "More Info",
	  "iconCls": "infoIcon",
	  "type": "AP Rater"
	},
	{
	  "name": "Facebook",
	  "iconCls": "faceBookIcon",
	  "type": "Social"
	},
	{
	  "name": "Twitter",
	  "iconCls": "twitterIcon",
	  "type": "Social"
	}
      ];
//      GLOB.f.loadMask();
//      Ext.Ajax.request({
//	url: 'resources/data/afterLoginSlideList.json',
//	method: 'GET',
//	success: function (response) {
//	  Ext.Viewport.unmask();
//	  var responseJason = JSON.parse(response.responseText);
//	  console.log('-------Response---------');
//	  console.log(responseJason);
//	  console.log('----------------');
      var slideNavListStore = Ext.getStore('slideNavListStore');
      slideNavListStore.removeAll();
      slideNavListStore.setData(data);
//	  console.log('-------Store---------');
//	  console.log(slideNavListStore);
//	  console.log('----------------');
      me.getMainToolbar().setTitle('Home');
      me.getMainCardGroup().animateActiveItem('homeMainTabPanel', {
	type: 'slide',
	direction: 'left'
      });
//	},
//	failure: function (response) {
//	  console.log(response);
//	  Ext.Viewport.unmask();
//	  Ext.Msg.alert('Failure', "Please check your internet connection.");
//	}
//      });
    }
  }
});
function validateEmail(checkEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(checkEmail);
}