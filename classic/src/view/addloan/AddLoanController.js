Ext.define('QuickLoan.view.addloan.AddLoanController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addloan',

    onSendClick: function () {

        var me = this;
        var view = me.getView();
        var form = view.down('form').getForm().getValues();

        Ext.Ajax.request({
            method: 'POST',
            url: 'http://localhost:5127/Customer/LoanRequest',
            headers: { 'Content-Type': 'application/json' },
            jsonData: form,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            },
            success: function (form, action) {
                // Add the main view to the viewport
                me.getView().destroy();
                location.reload(); 
            },
            failure: function (response) {
                if (response != null) {
                    var error = Ext.decode(response.responseText);
                    Ext.Msg.alert('Error', error.ErrorMessage);
                }
            }
        });

    },
    onCancelClick: function() {
        var view = this.getView();
        view.destroy();
    }
});