sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter","sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("week10.controller.Invoice", {
            
            onInit: function () {
                this.getSrvData();
            },


            //sorter: { path: 'localModel>CustomerName', descending: false, group: 'localModel>ShipperName'},groupHeaderFactory: 'localModel>ShipperName'}


            getSrvData(){
                var oDataModel = this.getOwnerComponent().getModel(); 
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                var oPath = "/Invoices"
                oDataModel.read(oPath,{
                    // filters:[ofilter],
                     success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                         oLocalModel.setSizeLimit(oSuccess.results.length);
                         oLocalModel.setProperty("/invoices",oSuccess.results);
                         
                     },
                     error:function(oError){
                         debugger;
                     }
                 })
            },

            navToCustomer:function(){
                this.getOwnerComponent().getRouter().navTo("RouteCustomer");
            }

            
        });
    });