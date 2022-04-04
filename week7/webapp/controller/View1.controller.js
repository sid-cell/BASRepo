sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/Label","sap/ui/model/json/JSONModel","sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Label,JSONModel,ODataModel) {
        "use strict";

        return Controller.extend("week7.controller.View1", {
            onInit: function () {
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



                var oModel = new ODataModel("http://services.odata.org/Northwind/Northwind.svc/Employees");
                
                var oMetadata = oModel.getProperty("/FirstName");
                this.getView().setModel(oMetadata,"/textmodel");
                


















                // var lbl = new Label({
                //     text:"Label"
                // });
                // lbl.addStyleClass("labelStyle");
                // lbl.placeAt("content"); 
            }

            
        });
    });
