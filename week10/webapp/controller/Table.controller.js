sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("week10.controller.Table", {
            onInit: function () {
               
                var oDataModel = this.getOwnerComponent().getModel(); 
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                var oPath = "/Employees"
                oDataModel.read(oPath,{
                    // filters:[ofilter],
                     success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                         //oLocalModel.setSizeLimit(oSuccess.results.length);
                         oLocalModel.setProperty("/results",oSuccess.results);
                         
                     },
                     error:function(oError){
                         debugger;
                     }
                 })
            },
            navToCustomerSearch: function(){
                this.getOwnerComponent().getRouter().navTo("RouteCustomer");
            }
        });
    });
