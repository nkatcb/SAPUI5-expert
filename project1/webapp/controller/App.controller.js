sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (Controller) {
        return Controller.extend("dtt.project1.controller.App", {
            onInit: function() {
                         },
            
            onOpenDialogHeader: function() {
                this.getOwnerComponent().openHelloDialog();

            }
        });
    }
    );