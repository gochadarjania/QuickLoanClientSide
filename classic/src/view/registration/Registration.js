Ext.define('QuickLoan.view.registration.Registration', {
    extend: 'Ext.window.Window',
    xtype: 'registration',

    requires: [
        'QuickLoan.view.registration.RegistrationController',
        'Ext.form.Panel'
    ],

    controller: 'registration',
    bodyPadding: 10,
    title: 'ანგარიშის შექმნა',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'registrationform',
        items: [{
            xtype: 'textfield',
            name: 'firstName',
            fieldLabel: 'სახელი',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'lastName',
            fieldLabel: 'გვარი',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'idNumber',
            fieldLabel: 'პირადი ნომერი',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'birthDate',
            inputType: 'date' ,
            dateFormat: 'Y-m-d',
            fieldLabel: 'დაბადების თარიღი',
            allowBlank: false
        }, {
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
            text: 'რეგისტრაცია',
            formBind: true,
            listeners: {
                click: 'onRegistrationClick'
            }
        }]
    }
});