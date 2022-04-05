sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Filter,FilterOperator,JSONModel) {
        "use strict";

        return Controller.extend("week7assignment.controller.App", {
            onInit: function () {
                //Odata Binding
                this.getSrvData();

                
                //JSON BInding
                var Products = {
                    "Products":[
                        {color: "red",value: "#f00"},{color: "green",value: "#0f0"},
                        {color: "blue",value: "#00f"},{color: "cyan",value: "#0ff"},
                        {color: "magenta",value: "#f0f"},{color: "yellow",value: "#ff0"},
                        {
                            color: "black",
                            value: "#000"
                        }
                    ]
                }

                var prodModel = new JSONModel();
                prodModel.setData(Products);
                this.getView().setModel(prodModel);
                
               

            },
            getSrvData: function(){ //getting odata service and datas from controller call rather thn view
                var oDataModel = this.getOwnerComponent().getModel(); //getOwnerComponent is an API which is used to fetch manifest Models(Node:You have to define a local model also in the manifest.json(JSON MODel)
                
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                 
                var ofilter = new Filter({
                    path:"CategoryID",
                    operator:"EQ",
                    value1: 1
                });


                var oPath = "/Categories" //The sPath is required for which odata we want
                oDataModel.read(oPath,{
                   // filters:[ofilter],
                    success:function(oSuccess){ //oSuccess will contain the data of the particular entity(Categries in our case)
                        oLocalModel.setSizeLimit(oSuccess.results.length);
                        oLocalModel.setProperty("/results",oSuccess.results);
                        
                        
                    },
                    error:function(oError){
                        debugger;
                    }
                })
            },
            createLabelStyleClass: function(){
                var lbl = new Label({
                    text:"Label"
                });
                lbl.addStyleClass("labelStyle");
                lbl.placeAt("content"); 
            }
            
        });
    });
