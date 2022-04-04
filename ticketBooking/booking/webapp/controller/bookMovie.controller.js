sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("booking.controller.bookMovie", {
            onInit: function () {

                const oFormModel = new JSONModel({
                });
                this.getView().setModel(oFormModel, "oFormModel");

            },
            TOView: function () {
                this.getOwnerComponent().getRouter().navTo("RouteHome");
            },

            onSubmit: function (oEvent) {

                var oFormModel = this.getView().getModel("oFormModel");

                const oDetailsModel = new JSONModel({
                    username: oFormModel.getProperty("/name"),
                    usercity: oFormModel.getProperty("/city"),
                    userCinema: oFormModel.getProperty("/cinema"),
                    bookingDate: oFormModel.getProperty("/date"),
                    movieTiming: oFormModel.getProperty("/showtiming"),
                    tickets: oFormModel.getProperty("/noOfTickets")
                });

                //setting the data into localModel defined in manifest
                var oLocalModel = this.getOwnerComponent().getModel("localModel");
                oLocalModel.setProperty("/userdetails", oDetailsModel.oData);
                this.getView().setModel(oLocalModel);

                //loading fragment
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "booking.fragment.bookingSuccess"
                    });
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });







            }

        });
    });