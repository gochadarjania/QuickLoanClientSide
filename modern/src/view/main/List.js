/**
 * This view is an example list of people.
 */
Ext.define('QuickLoan.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'QuickLoan.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'loans'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    },
    tbar: [{
        text: 'Load Data',
        handler: 'onLoadData' // Handler method to load data in the grid
    }]
});
