
function PhoneNavigator() {
}
PhoneNavigator.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }
    window.plugins.phonenavigator = new PhoneNavigator();
    return window.plugins.phonenavigator;
};
    
   /**
     * Opens phone navigator app to navigate to given lat/lon destination
     *
     * @param {Float} lat - destintation latitude as decimal number
     * @param {Float} lon - destintation longitude as decimal number 
     * @param {Function} successCallback - The callback which will be called when plugin call is successful.
     * * @param {Function} errorCallback - The callback which will be called when plugin encounters an error.
     * This callback function have a string param with the error.     
     */
    PhoneNavigator.prototype.doNavigate = function(lat, lon, successCallback, errorCallback) {
	
      cordova.exec(successCallback,
                            errorCallback,
                            'PhoneNavigator',
                            'doNavigate',
                            [lat, lon]);
    };


    cordova.addConstructor(PhoneNavigator.install);
