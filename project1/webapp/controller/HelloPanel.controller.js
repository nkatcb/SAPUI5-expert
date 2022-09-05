sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    //"sap/ui/core/Fragment"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{typeof sap.ui.core.Fragment} Fragment
     * 
     */

    function (Controller, MessageToast) {

        return Controller.extend("dtt.project1.controller.HelloPanel", {
            onInit: function () {
            },

            onShowHello: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle()

                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMSG = oBundle.getText("helloMsg", [sRecipient])

                MessageToast.show(sMSG)

            },

            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            },
           onOpenDialogHeader: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        }

        );


    }
);



