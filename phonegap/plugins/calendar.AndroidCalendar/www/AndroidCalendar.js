
function AndroidCalendar() {
}

AndroidCalendar.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.AndroidCalendar = new AndroidCalendar();
  return window.plugins.AndroidCalendar;
};
AndroidCalendar.prototype.addCalendarEvent = function (EventObj, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AndroidCalendar", "addCalendar",[{
  "title": EventObj.title,
  "startDate":EventObj.startDate,
  "endDate":EventObj.endDate,
  "Desc":EventObj.desc,
  "location":EventObj.location
  }]);
};
AndroidCalendar.prototype.openCalendar = function (EventObj, successCallback, errorCallback) {

  cordova.exec(successCallback, errorCallback, "AndroidCalendar", "openCalendar",[{
	"EventId":EventObj.EventId
  }]);
};
AndroidCalendar.prototype.checkEvent = function (EventObj, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AndroidCalendar", "checkEvent",[{
	"EventId":EventObj.EventId
  }]);
};

AndroidCalendar.prototype.editEvent = function (EventObj, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AndroidCalendar", "editEvent",[{
	"EventId":EventObj.EventId
  }]);
};
AndroidCalendar.prototype.openCalendarDateEvent = function (EventObj, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AndroidCalendar", "openDateEvent",[{
	"EventId":EventObj.EventId
  }]);
};
AndroidCalendar.prototype.enabledGoogleLocationService = function ( successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AndroidCalendar", "enableLocation",[]);
};
cordova.addConstructor(AndroidCalendar.install);
