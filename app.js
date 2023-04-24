/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'QuickLoan.Application',

    name: 'QuickLoan',

    requires: [
        // This will automatically load all classes in the QuickLoan namespace
        // so that application classes do not need to require each other.
        'QuickLoan.*'
    ],

    // The name of the initial view to create.
    //mainView: 'QuickLoan.view.main.Main'
});
