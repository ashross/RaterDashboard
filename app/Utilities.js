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