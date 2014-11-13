Ext.define("RaterDashboard.controller.SchedulerController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainCardGroup: 'mainCardGroup',
      ScheduleForm: 'schedule',
      checkinBtn: 'schedule #checkInBtnId',
      provideFeedbackBtn: 'schedule #provideFeedbackBtnId',
      slideNavList: 'main #slideNavListId',
      // main toolbar
      mainToolbar: 'mainCardGroup #mainToolbarId',
      navBtn: 'mainCardGroup #navBtnId',
      backButton: 'mainCardGroup #backButtonId'
    },
    control: {
      checkinBtn: {
	tap: 'checkinBtnTapped'
      },
      provideFeedbackBtn: {
	tap: 'provideFeedbackBtnTapped'
      }
    }
  },
  checkinBtnTapped: function () {
    var me = this;
    console.log('tapped');
    me.createCalendar();
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
  provideFeedbackBtnTapped: function () {
    var feedbackPopup = Ext.create('Ext.Panel', {
      width: '51%',
//      height: 208,
      centered: true,
      hideOnMaskTap: true,
      modal: true,
      cls: 'feedbackPopupCls',
//    cls: 'popupCls getNewPasswordCls',
//      hidden: true,
//      modal: true,
//      hideOnMaskTap: true,
      items: [
	{
	  xtype: 'fieldset',
	  title: 'Your Feedback',
	  labelAlign: 'top',
	  items: [
	    {
	      xtype: 'textareafield',
	      maxRows: 4,
	      name: 'bio'
	    }
	  ]
	},
	{
	  xtype: 'container',
	  margin: 5,
	  layout: {
	    type: 'hbox',
	    pack: 'center'
	  },
	  items: [
	    {
	      xtype: 'button',
	      cls: 'scheduleBtnCls',
	      text: 'Cancel',
	      handler: function () {
		Ext.Viewport.remove(feedbackPopup);
	      }
	    },
	    {
	      xtype: 'button',
	      cls: 'scheduleBtnCls ml10',
	      text: 'Submit',
	      handler: function () {
		Ext.Viewport.remove(feedbackPopup);
		setTimeout(function () {
		  Ext.Msg.alert('Success', 'Thanks for your feedback');
		}, 500);

	      }
	    }
	  ]
	}
      ]
    });
    Ext.Viewport.add(feedbackPopup);
    feedbackPopup.show();
  }
});