Ext.define('QuickLoan.view.registration.RegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registration',

    onRegistrationClick: function () {

        var me = this;

        var form = this.lookup('registrationform');
        Ext.Ajax.request({
            method: 'POST',
            url: 'https://localhost:7259/User/UserRegistration',
            headers: { 'Content-Type': 'application/json' },
            jsonData: {
                Email: form.down('[name=email]').getValue(),
                Password: form.down('[name=password]').getValue(),
                FirstName: form.down('[name=firstName]').getValue(),
                LastName: form.down('[name=lastName]').getValue(),
                PersonalNumber: form.down('[name=idNumber]').getValue(),
                DateOfBirth: form.down('[name=birthDate]').getValue()
            },
            success: function (form, action) {
                // Add the main view to the viewport
                me.getView().destroy();
                Ext.widget('login');
            },
            failure: function (response) {
                if (response != null) {
                    var error = Ext.decode(response.responseText);
                    Ext.Msg.alert('Error', error.ErrorMessage);
                }
            }
        });

    }
});