Ext.define('QuickLoan.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function () {

        var me = this;
        var form = this.lookup('loginform');
        Ext.Ajax.request({
            method: 'POST',
            url: 'https://localhost:7259/User/UserLogin',
            headers: { 'Content-Type': 'application/json' },
            jsonData: {
                Email: form.down('[name=email]').getValue(),
                Password: form.down('[name=password]').getValue()
            },
            success: function (response) {
                var data = Ext.decode(response.responseText);
                var jwtToken = data.token;
                var userType = data.userType;

                localStorage.setItem('jwtToken', jwtToken);
                // Set the localStorage value to true
                localStorage.setItem("QuickLoan", userType);

                // Remove Login Window
                me.getView().destroy();

                var loggedIn = '';
                if (userType == 1) {
                    loggedIn = 'app-admin';
                } else if (userType == 2) {
                    loggedIn = 'app-main';
                } else {
                    loggedIn = 'login';
                }
                Ext.widget(loggedIn);
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

    onRegistrationClick: function () {

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('registration');

    }
});