/**
 * This class is the main view for the application. It is specified in `app.js` as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QuickLoan.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'QuickLoan.view.main.MainController',
        'QuickLoan.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

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
        }],
        tbar: [{
            xtype: 'button',
            text: 'სესხის მოთხოვნა',
            handler: 'onAddLoanHandler'
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'ყველა განაცხადი',
            xtype: 'mainlist'
        }]
    }]
});