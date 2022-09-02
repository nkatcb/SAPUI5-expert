sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    // "sap/ui/model/json/JSONModel"
    // "dtt/project1/model/Models",
    // "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller, MessageToast) {
        return Controller.extend("dtt.project1.controller.App", {
            onInit: function() {
                         },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMSG = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMSG);
            }
        });
    });