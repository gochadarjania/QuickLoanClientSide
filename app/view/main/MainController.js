/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('QuickLoan.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('QuickLoan');
        localStorage.removeItem('jwtToken');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');
    },
    onAddLoanHandler: function(grid, rowIndex, colIndex) {
        Ext.create('QuickLoan.view.AddLoan', {
            grid: grid,
            rowIndex: rowIndex
        });
    },
    onViewHandler: function(grid, rowIndex, colIndex) {
        Ext.create('QuickLoan.view.ViewLoan', {
            grid: grid,
            rowIndex: rowIndex
        });
    },
    onEditHandler: function(grid, rowIndex, colIndex) {
        Ext.create('QuickLoan.view.EditLoanWindow', {
            grid: grid,
            rowIndex: rowIndex
        });
    }
});