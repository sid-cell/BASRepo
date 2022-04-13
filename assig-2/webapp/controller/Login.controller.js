sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,FilterOperator,Filter,JSONModel) {
        "use strict";

        return Controller.extend("assig2.controller.Login", {
            onInit: function () {
                this.getSrvData();
            },
            getSrvData: function(){ //getting odata service and datas from controller call rather thn view
                
                
                var oDataModel = this.getOwnerComponent().getModel(); //getOwnerComponent is an API which is used to fetch manifest Models(Node:You have to define a local model also in the manifest.json(JSON MODel)
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                
                 
                // var ofilter = new Filter({
                //     path:"EmployeeID",
                //     operator:"EQ",
                //     value1: 1
                // });

                var oPath = "/Employees" //The sPath is required for which odata we want
                oDataModel.read(oPath,{
                   // filters:[ofilter],
                    success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                       
                        oLocalModel.setSizeLimit(oSuccess.results.length);
                        oLocalModel.setProperty("/empData",oSuccess.results);
                        
                    },
                    error:function(oError){
                        
                    }
                })
            },
            onEmployeePress: function(oEvent){
                
               
                var empIndex = oEvent.getParameter("listItem").getBindingContextPath().split("/").pop();
                var oModel = this.getView().getModel("localModel");
                var oemployeeDetails = new JSONModel(oModel.oData.empData[empIndex]);
                this.getView().setModel(oemployeeDetails,"/Employee");
                this.getSplitAppObj().toDetail(this.createId("empdetail"));

            },
            getSplitAppObj: function () {
                var result = this.byId("SplitAppDemo");
                if (!result) {
                    Log.info("SplitApp object can't be found");
                }
                return result;
            },
            onPressDetailBack: function(){
                this.getSplitAppObj().backDetail();
            }
        });
    });
