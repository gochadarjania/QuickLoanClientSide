/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.define('QuickLoan.Application', {
    extend: 'Ext.app.Application',

    name: 'QuickLoan',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    views: [
        'QuickLoan.view.login.Login',
        'QuickLoan.view.main.Main',
        'QuickLoan.view.main.Admin'
    ],
    stores: [
        // TODO: add global / shared stores here
    ],
    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;
        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("QuickLoan");
        console.log(loggedIn);
        var userType = '';
        if(loggedIn == 1){
            userType = 'app-admin';
        }else if(loggedIn == 2){
            userType = 'app-main';
        }else{
            userType = 'login';
        }
        Ext.widget(userType);
    }
});
