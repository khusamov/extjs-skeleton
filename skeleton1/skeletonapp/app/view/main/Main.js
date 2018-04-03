
Ext.define('SkeletonApp.view.main.Main', {

    extend: 'Ext.panel.Panel',
    xtype: 'main',
    controller: 'main',
    viewModel: 'main',
    requires: [
        'SkeletonApp.view.main.MainController',
        'SkeletonApp.view.main.MainModel'
    ],

    title: 'SkeletonApp',
	html: 'Hello world!'

});