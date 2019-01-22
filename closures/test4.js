var Toaster = (function () {
    var setting = 0;
    var temperature;
    var low = 100;
    var med = 200;
    var high = 300;
    // public
    var turnOn = function () {
        return heatSetting();
    };
    var adjustSetting = function (setting) {
        if (setting <= 3) {
            temperature = low;
        } if (setting > 3 && setting <= 6) {
            temperature = med;
        } if (setting > 6 && setting <= 10) {
            temperature = high;
        }
        return temperature;
    };
    // private
    var heatSetting = function (adjustSetting) {
        var thermostat = adjustSetting;
        return thermostat;
    };
    return {
        turnOn: turnOn,
        adjustSetting: adjustSetting
    };
})();

var result1 = Toaster.adjustSetting(5);
var result2 = Toaster.adjustSetting(8);
console.log('result1', result1);
console.log('result2', result2);