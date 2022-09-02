// eslint-disable-next-line no-undef
sap.ui.define([
    "sap/ui/core/ComponentContainer"
], 
/**
 * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer
 */
    function(ComponentContainer) {
        // eslint-disable-next-line no-undef
        // alert("UI5 Is Ready");
        "use strict";
   
        new ComponentContainer({
            name: "dtt.project1",
            settings: {
                id: "project1"
            },
            async:true     
        }).placeAt("Contenido");
    });