
// WAI-ARIA (https://goo.gl/74tCLq) compatibility warnings
// can be suppressed by adding the following to application startup code:
Ext.ariaWarn = Ext.emptyFn;

Ext.application({
    extend: 'SkeletonApp.Application',
    name: 'SkeletonApp',
    requires: ['SkeletonApp.view.main.Main'],
    mainView: 'SkeletonApp.view.main.Main'
});
