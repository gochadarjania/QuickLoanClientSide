/**
 * This class is the main view for the application. It is specified in `app.js` as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QuickLoan.view.main.Admin', {
    extend: 'Ext.container.Container',

    requires: [
        'QuickLoan.view.main.AdminController'
    ],

    xtype: 'app-admin',

    controller: 'admin',
    plugins: 'viewport',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        width: 150,
        split: true,
        bbar: [{
            xtype: 'button',
            text: 'გასვლა',
            handler: 'onClickButton'
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'ყველა განაცხადი',
            xtype: 'adminlist'
        }]
    }]
});