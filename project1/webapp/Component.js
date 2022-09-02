sap.ui.define([
    "dtt/project1/model/models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
    /**
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     */
    function(models, ResourceModel, UIComponent){
        return UIComponent.extend("dtt.project1.Component", {
            
            metadata:{
                manifest: "json"
                // "rootView":{
                //     "viewName": "dtt.project1.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
            },
            
            init:function(){
                UIComponent.prototype.init.apply(
                    this, arguments
                );
                this.setModel(models.createRecipient());

                var i18nModel = new ResourceModel({
                    bundleName: "dtt.project1.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
            }
        });
    }
);