sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("assinment1.controller.EmployeeDetails", {
            onInit: function () {
                // var oEmpModel = this.getOwnerComponent().getModel("empData")
                // this.getView().setModel(oEmpModel);
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteEmployeeDetails").attachMatched(this._onRouteMatched,this);
                



            },
            _onRouteMatched: function(oEvent){
                
                var oModel = this.getView().getModel("empData");
                var oArgs = oEvent.getParameter("arguments");
                var emName = oModel.oData.EmployeeDetails[oArgs.empId].AdditionalDetails.EmergencyContact.Name;
                var emNo = oModel.oData.EmployeeDetails[oArgs.empId].AdditionalDetails.EmergencyContact.Number;
                var street = oModel.oData.EmployeeDetails[oArgs.empId].AdditionalDetails.HomeAddress.Street;
                var flatNo = oModel.oData.EmployeeDetails[oArgs.empId].AdditionalDetails.HomeAddress.FlatNo;
                var city = oModel.oData.EmployeeDetails[oArgs.empId].AdditionalDetails.HomeAddress.City;
                const oDetailsModel = new JSONModel({
                    emerName: emName,
                    emerNum : emNo,
                    Street :street,
                    FlatNo : flatNo,
                    City : city
                });
                this.getView().setModel(oDetailsModel, "DetailsModel");
                // this.getView().bindElement({
                //     path:"/EmployeeDetails{"+oArgs.empId+"}",
                //     events:{
                //         dataRequested:function(){
                //             oView.setBusy(true);
                //         },
                //         dataReceived:function(){
                //             oView.setBusy(false);
                //         }
                //     }
                // })

            },
            navToHome: function (oEvent) {
                
                this.getOwnerComponent().getRouter().navTo("RouteEmployees");
            }
        });
    });
