        sap.ui.define([
            "sap/ui/model/json/JSONModel"
            
        ], 
            /**
             * provide app-view type models (as in the first "V" in MVVC)
             * 
             * @param {typeof sap.ui.model.json.JSONModel} JSONModel
             * 
             */
            function(JSONModel){
                "use strict";

                return{ createRecipient: function () {
                    var oData = {
                        recipient: {
                            name: "world"
                        }
                        
                    };

                    return new JSONModel(oData)
                    
                }
            }

        } 
     )