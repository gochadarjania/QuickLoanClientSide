Ext.define('QuickLoan.view.AddLoan', {
    extend: 'Ext.window.Window',
    alias: 'widget.addloan',

    requires: [
        'QuickLoan.view.addloan.AddLoanController',
        'Ext.form.Panel'
    ],

    controller: 'addloan',
    bodyPadding: 10,
    title: 'ანგარიშის შექმნა',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'addloanform',
        items: [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            defaults: {
                anchor: '100%',
                xtype: 'textfield',
                labelWidth: 150
            },
            items: [{
                xtype: 'numberfield',
                fieldLabel: 'პერიოდი',
                name: 'period',
                allowBlank: false
            }, {
                xtype: 'numberfield',
                fieldLabel: 'თანხა',
                name: 'money',
                allowBlank: false
            }, {
                xtype: 'combo',
                fieldLabel: 'სესხის ტიპი',
                name: 'loanTypeId',
                queryMode: 'local',
                store: {
                    xtype: 'store',
                    fields: ['id', 'name'],
                    data: [{
                        id: 1,
                        name: 'სწრაფი სესხი'
                    }, {
                        id: 2,
                        name: 'ავტო სესხი'
                    }, {
                        id: 3,
                        name: 'განვადება'
                    }]
                },
                displayField: 'name',
                valueField: 'id',
                editable: false,
                allowBlank: false
            }, {
                xtype: 'combo',
                fieldLabel: 'ვალუტა',
                name: 'currencyTypeId',
                queryMode: 'local',
                store: {
                    xtype: 'store',
                    fields: ['id', 'name'],
                    data: [{
                        id: 1,
                        name: 'ლარი'
                    }, {
                        id: 2,
                        name: 'დოლარი'
                    }, {
                        id: 3,
                        name: 'ევრო'
                    }]
                },
                displayField: 'name',
                valueField: 'id',
                editable: false,
                allowBlank: false
            }]
        }],
        buttons: [
            {
                text: 'გაგზავნა',
                formBind: true,
                listeners: {
                    click: 'onSendClick'
                }
            }, {
                text: 'გაუქმება',
                listeners: {
                    click: 'onCancelClick'
                }
            }
        ]
    }
});