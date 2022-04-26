sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("assignment2.controller.Login", {
            onInit: function () {

            },
            onLoginTap: function(){
                this.getOwnerComponent().getRouter().navTo("RouteSplitApp");
            }
        });
    });
