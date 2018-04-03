
Ext.define('SkeletonApp.Application', {

    extend: 'Ext.app.Application',
    name: 'SkeletonApp',
	requires: ['Ext.plugin.Viewport'],

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});