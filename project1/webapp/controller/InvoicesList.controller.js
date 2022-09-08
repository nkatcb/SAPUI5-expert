sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/InvoicesFormatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.ui.model.json.JSONModel} JSONModel
     * @param{typeof sap.ui.model.Filter} Filter
     * @param{typeof sap.ui.model.FilterOperator} FilterOperator
     * 
     */

    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
        return Controller.extend("dtt.project1.controller.InvoicesList", {

            onInit: function () {
                var oViewModel = new JSONModel({
                    usd: "USD",
                    mxn: "MXN"
                }); this.getView().setModel(oViewModel, "Currency")
            },
            formatter: InvoicesFormatter,
            onFilterInvoices: function (oEvent) {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    aFilter.push(
                        new Filter("ProductName", FilterOperator.Contains, sQuery)
                    );
                }
                const oList = this.getView().byId("_IDGenList1");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);

            },
            navigateToDetails: function(oEvent){
                const oItem = oEvent.getSource();
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Details",{
                    invoicePath:window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))
                });
            }

        })
    });