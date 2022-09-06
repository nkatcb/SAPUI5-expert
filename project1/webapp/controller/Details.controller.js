sap.ui.define([
    "sap/ui/core/mvc/Controller",

],
    /**
         * @param{typeof sap.ui.core.mvc.Controller} Controller
         * 
         */

    function (Controller) {

        return Controller.extend("dtt.project1.controller.Details", {
            _onObjectMatch: function(oEvent){
                this.getView().bindElement({
                    path:"/"+window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                    model:"northwind"
                });
            },
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRouter("Details").attachPatternMatched(this._onObjectMatch,this);

            }
        }
        )
    }
)