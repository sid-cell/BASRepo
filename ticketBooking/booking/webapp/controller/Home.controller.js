sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,JSONModel) {
        "use strict";

        return Controller.extend("booking.controller.Home", {
            onInit: function () {

            },
            onInfoPress : function (oEvent) {
                
                var oModel = this.getView().getModel("data");
                var movieIndex = parseInt(oEvent.getSource().getBindingContext("data").sPath.split("/").pop());
                var desc = oModel.oData.movies[movieIndex].desc
                //MessageToast.show(desc);
                const oTextModel = new JSONModel({
                    movieDesc: desc,
                });
                this.getView().setModel(oTextModel, "textModel");
                
                //Below code is for calling or loading the fragment
                if (!this.onMovieInfo) {
                    this.onMovieInfo = sap.ui.xmlfragment("booking.fragment.movie", this);
                    this.getView().addDependent(this.onMovieInfo);
                    }
                    this.onMovieInfo.open();
                
            },
            onBooking: function(oEvent){
                
                // var movieIndex = parseInt(oEvent.getSource().getBindingContext("data").sPath.split("/").pop());
                var movieObject = oEvent.getSource().getBindingContext("data").getObject();
                var mName = movieObject.name;
                // debugger;

                // this.getOwnerComponent().getRouter().navTo("RoutebookMovie",{
                //     toMovie:movieIndex
                // });

                this.getOwnerComponent().getRouter().navTo("RoutebookMovie",{
                    movieName: mName
                });
            }
        });
    });
