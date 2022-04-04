sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"
    ,"com/mvcstructure/formatters/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel,formatter) {
        "use strict";

        return Controller.extend("com.mvcstructure.controller.View1", {
            formatter:formatter,
            onInit: function () {
                
                var localModel = new JSONModel();
                this.getView().setModel(localModel, "localModel");
                this.getView().getModel("localModel").setProperty("/localData", "Local");

            },

            onPress: function (oEvent) {
                var model = this.getView().getModel("data");
                var name = model.getProperty("/details/name");
                var text = oEvent.getSource().getText();
                MessageToast.show(`Button Pressed=${text}`);
            },

            addNewRow: function (oEvent) {
                var model = this.getView().getModel("data"); //to get the model
                var details = model.getProperty("/empDetails");
                var newRow = {
                    "name": "Simmy",
                    "empId": "180310123",
                    "desn": "DSE", 
                    "dob": "11/9/1994", "edit": true
                }
                details.push(newRow);
                model.refresh();

            },

            onDeleteRow: function(oEvent){
                
                var row = oEvent.getSource().getBindingContext("data").getObject(); 
                var indexOfRow = oEvent.getSource().getBindingContext("data").getPath();
                var index = indexOfRow.split("/")[2]; 
                var model = this.getView().getModel("data");
                var details = model.getProperty("/empDetails")
                details.splice(index,1);
                model.refresh();
                
            },

            onSearchTable:function(oEvent){
                var sQuery = oEvent.getParameters().query;
                var table = this.getView().byId("myTable");
                var contains = sap.ui.model.FilterOperator.Contains;
                var filters = new sap.ui.model.Filter([new sap.ui.model.Filter("name",contains,sQuery),
                                new sap.ui.model.Filter("empId",contains,sQuery)],false);
                                var oBinding = table.getBinding();
                                oBinding.filter(filters);
              
            },

            openDialog: function(){
                // One way to open Dialog
                // if (!this.pDialog) {
                //     this.pDialog = this.loadFragment({
                //         name: "com.mvcstructure.fragments.test"
                //     });
                // } 
                // this.pDialog.then(function(oDialog) {
                //     oDialog.open();
                // });

                //Second way to open Dialog
                if(!this.Confirmation){
                    this.Confirmation = sap.ui.xmlfragment("com.mvcstructure.fragments.test",this);
                    this.getView().addDependent(this.Confirmation);
                }
                this.Confirmation.open();

            }

            ,navToView2: function(){
                
                //this.getOwnerComponent().getRouter().navTo("RouteView2"); //one method
                
                //second method
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("RouteView2",{
                    name:"Mark"                     //this is an argument that we are pasing to View2
                });
            }
        });
    });
