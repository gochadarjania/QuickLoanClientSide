/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('QuickLoan.view.main.AdminController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin',

    onClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('QuickLoan');
        localStorage.removeItem('jwtToken');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');
    },

    onDeleteHandler: function (grid, rowIndex, colIndex) {        
        var me = this;
        var loan = grid.getStore().getAt(rowIndex);
        console.log(loan.id);

        Ext.Ajax.request({
            method: 'DELETE',
            url: 'http://localhost:5127/Admin/LoanDelete/' + loan.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            },
            success: function (response) {
                // Add the main view to the viewport
                grid.getStore().load();
            },
            failure: function (response) {
                if (response != null) {
                    var error = Ext.decode(response.responseText);
                    Ext.Msg.alert('Error', error.ErrorMessage);
                }
            }
        });
    },
    onApproveHandler: function (grid, rowIndex, colIndex) {     
        var loan = grid.getStore().getAt(rowIndex);
        Ext.Ajax.request({
            method: 'POST',
            url: 'http://localhost:5127/Admin/Approve/' + loan.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
            },
            success: function (response) {
                // Add the main view to the viewport
                grid.getStore().load();
            },
            failure: function (response) {
                if (response != null) {
                    var error = Ext.decode(response.responseText);
                    Ext.Msg.alert('Error', error.ErrorMessage);
                }
            }
        });
    },
    onEditHandler: function(grid, rowIndex, colIndex) {
        Ext.create('QuickLoan.view.EditWindow', {
            grid: grid,
            rowIndex: rowIndex
        });
    }
});