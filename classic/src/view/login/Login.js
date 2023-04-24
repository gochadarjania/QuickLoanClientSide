Ext.define('QuickLoan.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'QuickLoan.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'ავტორიზაცია',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'loginform',
        items: [{
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'ელ. ფოსტა',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'პაროლი',
            allowBlank: false
        }],
        buttons: [{
            text: 'შესვლა',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        },{
            text: 'რეგისტრაცია',
            formBind: false,
            listeners: {
                click: 'onRegistrationClick'
            }
        }]
    }
});