sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter","sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("week10.controller.Customer", {
            
            onInit: function () {
                this.getSrvData();
            },


            navToTable: function(){
                this.getOwnerComponent().getRouter().navTo("RouteTable");
            },


            getSrvData(){
                var oDataModel = this.getOwnerComponent().getModel(); 
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                var oPath = "/Customers"
                oDataModel.read(oPath,{
                    // filters:[ofilter],
                     success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                         //oLocalModel.setSizeLimit(oSuccess.results.length);
                         oLocalModel.setProperty("/customers",oSuccess.results);
                         
                     },
                     error:function(oError){
                         debugger;
                     }
                 })
            },

            onSearchList:function(event){

                var Filters=[];
                var query = event.getParameter("query");
                if(query && query.length>0){
                    Filters.push(new Filter({
                        path:"CustomerID",
                        operator:FilterOperator.Contains,
                        value1:query
                    }));
                }

                var list = this.getView().byId("customers")
                var binding = list.getBinding("items");
                binding.filter(Filters)
              
            },
            navToInvoices:function(){
                this.getOwnerComponent().getRouter().navTo("RouteInvoice");
            }

            
        });
    });