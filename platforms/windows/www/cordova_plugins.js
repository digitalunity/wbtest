﻿cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.toast/www/Toast.js",
        "id": "nl.x-services.plugins.toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.toast/test/tests.js",
        "id": "nl.x-services.plugins.toast.tests"
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationProxy.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationCore.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy.Core",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationUtil.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy.Util",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "android.support.v4": "21.0.1",
    "de.appplant.cordova.common.registerusernotificationsettings": "1.0.1",
    "nl.x-services.plugins.toast": "2.0.4",
    "de.appplant.cordova.plugin.local-notification": "0.8.2-dev",
    "cordova-plugin-device": "1.0.1"
}
// BOTTOM OF METADATA
});