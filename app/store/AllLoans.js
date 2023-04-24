Ext.define('QuickLoan.store.AllLoans', {
    extend: 'Ext.data.Store',
    alias:'store.allloans',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:5127/Admin/GetLoans' ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    },
    pageSize: 15,
    currentPage: 1,
    autoLoad: true,
    listeners: {
        beforeload: function(store, operation, eOpts) {
            operation.setParams({
                page: store.currentPage,
                limit: store.pageSize
            });
        },
        exception: function(proxy, response, operation) {
            var error = Ext.decode(response.responseText);
            Ext.Msg.alert('Error', error.ErrorMessage);
        }
    },
    autoLoad: true
});
