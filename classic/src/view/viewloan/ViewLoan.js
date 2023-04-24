Ext.define('QuickLoan.view.ViewLoan', {
    extend: 'Ext.window.Window',
    alias: 'widget.viewloan',

    title: 'განაცხადი',
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
            url: 'http://localhost:5127/Customer/GetLoan/' + id,
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
                fieldLabel: 'პერიოდი',
                name: 'period',
                readOnly: true
            }, {
                xtype: 'numberfield',
                fieldLabel: 'თანხა',
                name: 'money',
                readOnly: true
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
                readOnly: true
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
                readOnly: true
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

        me.callParent(arguments);
    }
});