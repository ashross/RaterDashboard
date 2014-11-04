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
  loginBtnTapped: function() {
    var me = this;
    var loginFormRef = me.getLoginForm().getValues();
//    console.log(loginFormRef);

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
      console.log(me.getSlideNavList().getGrouped());
      me.getSlideNavList().setGrouped(null);
      console.log(me.getSlideNavList().getGrouped());
      me.getSlideNavList().setStore('afterLoginSlideListStore');
      me.getSlideNavList().setGrouped(true);
      console.log(me.getSlideNavList().getGrouped());
      me.getSlideNavList().refresh();

      me.getMainToolbar().setTitle('Home');
      me.getMainCardGroup().animateActiveItem('homeMainTabPanel', {
	type: 'slide',
	direction: 'left'
      });


    }
  }
});
function validateEmail(checkEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(checkEmail);
}