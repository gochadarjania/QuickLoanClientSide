/**
 * This view is an example list of people.
 */
Ext.define('QuickLoan.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    bbar:{
        xtype:'pagingtoolbar',
        display: true
    },
    requires: [
        'QuickLoan.store.CustomerLoans'
    ],

    title: 'Personnel',

    store: {
        type: 'customerloans'
    },
    actions:{
        view:{
            iconCls: 'x-fa fa-eye',
            tooltip:'View',
            handler:'onViewHandler'
        },
        edit:{
            iconCls: 'fas fa-pencil-alt',
            tooltip:'Edit',
            handler:'onEditHandler',
            listeners: {
                render: function(button) {
                    if (statusId === 4) {
                        button.setDisabled(true);
                    }
                }
            }
        }
    },

    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            flex: 1,
            renderer: function(value) {
                return Ext.util.Format.number(value, '0,000');
            }
        },
        {
            text: 'თანხა',
            dataIndex: 'money',
            flex: 1,
            renderer: function(value) {
                return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            text: 'პერიოდი',
            dataIndex: 'period',
            flex: 1,
            renderer: function(value) {
                return Ext.util.Format.number(value, '0,000');
            }
        },
        {
            text: 'სესხის ტიპი',
            dataIndex: 'loanTypeId',
            flex: 1,
            renderer: function(value) {
                if(value === 1){
                    return 'სწრაფი სესხი'
                }
                if(value === 2){
                    return 'ავტო სესხი'
                }else{
                    return 'განვადება'
                }
            }
        },
        {
            text: 'ვალუტა',
            dataIndex: 'currencyTypeId',
            flex: 1,
            renderer: function(value) {
                if(value === 1){
                    return 'ლარი'
                }
                if(value === 2){
                    return 'დოლარი'
                }else{
                    return 'ევრო'
                }
            }
        },
        {
            text: 'სტატუსი',
            dataIndex: 'statusId',
            flex: 1,
            renderer: function(value) {
                if(value === 1){
                    return '<span style="color:#eba300">გადაგზავნილი</span>'
                }
                if(value === 2){
                    return '<span style="color:#ffca00">დამუშავების პროცესში</span>'
                }
                if(value === 3){
                    return '<span style="color:green">დამტკიცებული</span>'
                }else{
                    return '<span style="color:red">უარყოფილი</span>'
                }
            }
        },
        {
            with: 70,
            sortable: false,
            menuDisabled: true,
            xtype:'actioncolumn',
            items:['@view', '@edit']
        }
    ]
});
