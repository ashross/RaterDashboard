Ext.define("RaterDashboard.controller.SchedulerController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainCardGroup: 'mainCardGroup',
      ScheduleForm: 'schedule',
      checkinBtn: 'schedule #checkInBtnId',
      slideNavList: 'main #slideNavListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId'
    },
    control: {
        checkinBtn: {
	tap: 'checkinBtnTapped'
      }
    }
  },
    checkinBtnTapped: function() {
    var me = this;
    console.log('tapped');
     me.createCalendar();

},
success:function (Obj){
        var eventId=Obj;
        
        var me = this;
        alert('in success');
         console.log('success '+obj);
        
        return true;
        
    },
    /**
     * @method error
     *error event for create and open calendar event
     */

    error:function (sub){
        //alert('in failure');
        console.log('error'+sub);
    },
           

    createCalendar:function(){
         //alert('entering createCalendar');
        var me = this;
        var EventObj = {
            "title": 'Rater Appointment',
            "startDate":new Date(),
            "endDate":new Date(),
            "desc":"Rater Appointment Test",
            "location":'Madrid'
        };
        window.plugins.AndroidCalendar.addCalendarEvent(EventObj,me.success,me.error);

    }
});
function validateEmail(checkEmail) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(checkEmail);
}