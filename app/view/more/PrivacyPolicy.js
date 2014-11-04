Ext.define("RaterDashboard.view.more.PrivacyPolicy", {
  extend: 'Ext.Container',
  xtype: 'privacyPolicy',
  config: {
    scrollable: 'vertical',
    styleHtmlContent: true,
    items: [
      {
	xtype: 'panel',
	padding: 10,
	html: 'Last Updated: May 5, 2014'
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  'The College Board is a not-for-profit membership association whose mission is to connect students to college success and opportunity. References in this Privacy Policy may, as the context requires, include College Board affiliate or subsidiary websites. The College Board provides access to information, goods, and services that facilitate the transition from high school to college to make the college experience more enjoyable and cost-efficient. We recognize the importance of protecting the privacy rights of our users.'
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  'College Board has been awarded TRUSTes Privacy Seal signifying that this privacy policy and practices have been reviewed by TRUSTe for compliance with <a href="javascript:trustLink();">TRUSTes program requirements</a> including transparency, accountability and choice regarding the collection and use of your personally identifiable information. The TRUSTe program covers only information that is collected through this Web site, <a href="javascript:openLink()">www.collegeboard.org.</a>'
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  'TRUSTes mission, as an independent third party, is to accelerate online trust among consumers and organizations globally through its leading privacy Trustmark and innovative trust solutions. If you have questions or complaints regarding our privacy policy or practices, please <a href="javascript:mailingFn()">contact us directly.</a> If you are not satisfied with our response you can contact <a href="javascript:TrustHere()">TRUSTe here.</a>'
	]
      },
      {
	xtype: 'panel',
	padding: 10,
	html: [
	  'This Privacy Policy applies only to personally identifiable information collected on these website(s) and does not apply to any other information collected by the College Board through any other means. This Privacy Policy applies to the use and sharing of personally identifiable information collected on and after the date that this Privacy Policy is posted.'
	]
      }
    ]
  }
});
function openLink() {
  var url = 'http://www.collegeboard.org';
  if (Ext.os.is.iOS) {
    console.log('iOS');
    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
  } else if (Ext.os.is.Andriod) {
    console.log('Android');
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    console.log('web');
    window.open(url, '_system');
  }
}
function trustLink() {
  var url = 'http://www.truste.com/privacy-program-requirements/';
  if (Ext.os.is.iOS) {
    console.log('iOS');
    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
  } else if (Ext.os.is.Andriod) {
    console.log('Android');
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    console.log('web');
    window.open(url, '_system');
  }
}
function TrustHere() {
  var url = 'https://feedback-form.truste.com/watchdog/request';
  if (Ext.os.is.iOS) {
    console.log('iOS');
    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
  } else if (Ext.os.is.Andriod) {
    console.log('Android');
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    console.log('web');
    window.open(url, '_system');
  }
}

function mailingFn() {
  var emailId = "inquiry@collegeboard.org";
  var subject = "Privacy Policy";
  if (Ext.os.is.Android) {
    window.open('mailto:' + emailId + '?subject=' + subject + '&body=College Board');
  } else {
    window.location.href = "mailto:" + emailId + "?subject=" + subject + "&body=College Board";
  }
}