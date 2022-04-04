sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel",
     "sap/ui/model/Filter","sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("assinment1.controller.Employees", {
            onInit: function () {
                // var oEmpModel = this.getOwnerComponent().getModel("empData")
                // this.getView().setModel(oEmpModel);



            },
            showDetails: function (oEvent) {
                
                var eId = oEvent.getSource().getBindingContext("empData").getProperty("empId");
                // var itemId =parseInt(oEvent.getSource().getBindingContextPath("empData").split("/").pop());
                this.getOwnerComponent().getRouter().navTo("RouteEmployeeDetails",{
                    empId:eId
                });
            },
            handleSearch: function(event){
                var Filters=[];
                var query = event.getParameter("query");
                if(query && query.length>0){
                    Filters.push(new Filter({
                        path:"Name",
                        operator:FilterOperator.Contains,
                        value1:query
                    }));
                }

                var list = this.getView().byId("list")
                var binding = list.getBinding("items");
                binding.filter(Filters)
            }
        });
    });
