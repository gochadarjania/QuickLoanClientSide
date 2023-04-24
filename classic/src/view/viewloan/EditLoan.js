Ext.define('QuickLoan.view.EditLoanWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editloanwindow',

    title: 'განაცხადის რედაქტირება',
    width: 400,
    layout: 'fit',
    modal: true,
    autoShow: true,

    requires: [
        'Ext.form.Panel'
    ],
    initComponent: function () {
        var me = this;
        var record = me.grid.getStore().getAt(me.rowIndex);
        var id = record.get('id');

        // Make an API call to retrieve the record data
        Ext.Ajax.request({
            url: 'https://localhost:7259/Customer/GetLoan/' + id,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            },
            success: function (response) {
                // Parse the JSON response
                var recordData = Ext.decode(response.responseText);

                // Set the form fields with the retrieved data
                me.down('form').getForm().setValues(recordData);
            },
            failure: function (response) {
                // Show an error message if the API call fails
                Ext.Msg.alert('Error', 'Failed to retrieve record data');
            }
        });
        me.items = [{
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
                fieldLabel: 'Id',
                name: 'id',
                readOnly: true,
                hidden: true
            },{
                xtype: 'numberfield',
                fieldLabel: 'პერიოდი',
                name: 'period'
            }, {
                xtype: 'numberfield',
                fieldLabel: 'თანხა',
                name: 'money'
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
                editable: false
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
                editable: false
            }, {
                xtype: 'combo',
                fieldLabel: 'სტატუსი',
                name: 'statusId',
                queryMode: 'local',
                readOnly: true,
                store: {
                    xtype: 'store',
                    fields: ['id', 'name'],
                    data: [{
                        id: 1,
                        name: 'გადაგზავნილი'
                    }, {
                        id: 2,
                        name: 'დამუშავების პროცესში'
                    }, {
                        id: 3,
                        name: 'დამტკიცებული'
                    }, {
                        id: 4,
                        name: 'უარყოფილი'
                    }]
                },
                displayField: 'name',
                valueField: 'id',
                editable: false,
                allowBlank: false
            }]
        }];


        me.buttons = [{
            text: 'შენახვა',
            formBind: true,
            handler: function () {

                var form = me.down('form').getForm().getValues();
                console.log(form);
                Ext.Ajax.request({
                    url: 'https://localhost:7259/Customer/LoanUpdate',
                    method: 'PUT',
                    jsonData: form,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
                    },
                    success: function (response, opts) {
                        me.close();
                        location.reload(); 
                    },
                    failure: function (response, opts) {
                        if (response != null) {
                            var error = Ext.decode(response.responseText);
                            Ext.Msg.alert('Error', error.ErrorMessage);
                        }
                    }
                });

            }
        }, {
            text: 'გაუქმება',
            handler: function () {
                me.close();
            }
        }];

        me.callParent(arguments);
    }
});