sap.ui.define([
    "dtt/project1/model/models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent",
    "./controller/HelloDialog"
],
    /**
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     
     */
    function (models, ResourceModel, UIComponent, HelloDialog) {
        return UIComponent.extend("dtt.project1.Component", {

            metadata: {
                manifest: "json"

            },

            init: function () {
                UIComponent.prototype.init.apply(
                    this, arguments
                );
                this.setModel(models.createRecipient());

                var i18nModel = new ResourceModel({
                    bundleName: "dtt.project1.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n")
                this._helloDialog = new HelloDialog(this.getRootControl());
            },
            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            }

        });
    }
);