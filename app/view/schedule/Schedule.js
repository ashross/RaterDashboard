Ext.define("RaterDashboard.view.schedule.Schedule", {
  extend: 'Ext.Container',
  xtype: 'schedule',
  config: {
    scrollable: 'vertical',
    items: [
      {
	xtype: 'panel',
	padding: 10,
	style: 'font-size:15px',
	html: 'AP Rater Schedule'
      },
      {
	xtype: 'panel',
	padding: 10,
	style: 'font-size:13px',
	html: 'AP Reader ETS constructed-response scoring professionals, Readers for AP® Exams or Readers associated with ETS programs gather at regional site locations to hand-score written short answers or essays as well as audio and spoken responses.<br /> The following programs offer teaching faculty and administrators the opportunity to evaluate test responses in onsite (i.e., paper-based) and Schedule scoring sessions:'
      },
      {
	xtype: 'container',
	layout: 'hbox',
	margin: 10,
	defaults: {
	  width: '20%'
	},
	items: [
	  {
	    xtype: 'button',
	    cls: 'scheduleBtnCls',
	    margin: '0 10 0 0',
	    text: 'Tweet'
	  },
	  {
	    xtype: 'button',
	    cls: 'scheduleBtnCls',
	    itemId: 'checkInBtnId',
	    text: 'Check in'
	  }
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  '<h2 class="section">Date &amp; Time</h2>' +
		  '<p class="info-value">Wed 01:00pm</p>' +
		  '<h2 class="section">Location</h2>' +
		  '<p class="info-value">Northern Hemisphere A1/A2</p>'
	]
      },
      {
	xtype: 'button',
	margin: 10,
	cls: 'scheduleBtnCls',
	width: '25%',
	text: 'Provide Feedback'
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  '<h2 class="section">Raters</h2>'
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  '<div class="avatar" style="background-image: url(https://s3.amazonaws.com/static.lanyrd.net/cropped-profile-photos/a07e1067f8f55b5be42b33a1cb2c19ef9899b6e2-s75.jpg);background-size: 40px 40px;background-position: left center;background-repeat: no-repeat;padding: 10px 0 10px 50px;">Aaron Conran</div>'
	]
      }
    ]
  }
});
