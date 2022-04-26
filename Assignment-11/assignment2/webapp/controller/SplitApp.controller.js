sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter","sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("assignment2.controller.SplitApp", {
            onInit: function () {
                this.getSrvData();
            },
            navTologin: function(){
                this.getOwnerComponent().getRouter().navTo("RouteLogin")
            },
            getSrvData: function(){ //getting odata service and datas from controller call rather thn view
                
                
                var oDataModel = this.getOwnerComponent().getModel(); //getOwnerComponent is an API which is used to fetch manifest Models(Node:You have to define a local model also in the manifest.json(JSON MODel)
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                debugger;
                 
                // var ofilter = new Filter({
                //     path:"EmployeeID",
                //     operator:"EQ",
                //     value1: 1
                // });

                var oPath = "/Employees" //The sPath is required for which odata we want
                oDataModel.read(oPath,{
                   // filters:[ofilter],
                    success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                       debugger;
                        oLocalModel.setSizeLimit(oSuccess.results.length);
                        oLocalModel.setProperty("/empData",oSuccess.results);
                        
                    },
                    error:function(oError){
                        debugger;
                    }
                })
            }
        });
    });
