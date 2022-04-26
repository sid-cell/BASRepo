sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        

        return Controller.extend("booking.controller.bookMovie", {
            
            

            onInit: function (oEvent) {
                
                const oFormModel = new JSONModel({
                });
                this.getView().setModel(oFormModel, "oFormModel");

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RoutebookMovie").attachMatched(this._onRouteMatched,this);
                
                oFormModel.setProperty("/cinema",movName); //edit 1


                // var oRouter = this.getOwnerComponent().getRouter();
                // oRouter.getRoute("RoutebookMovie").attachMatched(this._onRouteMatched,this);
                
               

            },
            _onRouteMatched: function(oEvent){
                
                var oModel = this.getView().getModel("data");
                var oArgs = oEvent.getParameter("arguments");
                var movieName = oArgs.movieName;
                
                
                

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
                    bookingDate: oFormModel.getProperty("/date").split(",")[0],
                    movieTiming: oFormModel.getProperty("/date").split(",")[1],
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

                var odataModel =  this.getView().getModel("data");
                var movies = odataModel.getProperty("/movies");
                debugger;
                movies.filter(function (item) {
                    if(item.name === movName){
                        item.noOfTickets -= oDetailsModel.tickets; 
                    }
                });
                
                // var movieIndex = parseInt(oEvent.getSource().getBindingContext("data").sPath.split("/").pop());
                // var movieIndex = oEvent.getParameter("arguments").toMovie;
                // var movie = odataModel.oData.movies[0];

                // debugger;
                // Object.entries(movie).forEach(([key,value]) => {
                //     if(key==="noOfTickets"){
                //         movie.noOfTickets = 100 - oDetailsModel.oData.tickets; 
                //     }
                    
                // });

               // this.getOwnerComponent().getRouter().navTo("RouteHome");

               


               Object.entries(odataModel.oData.movies[0]).forEach(([key,value]) => { 
                if(key==="noOfTickets"){
                    var ticketsPresent = odataModel.oData.movies[0].noOfTickets;
                   odataModel.oData.movies[0].noOfTickets = ticketsPresent - oDetailsModel.oData.tickets;
                }
            });

            
                /**Object.entries(odataModel.oData.movies[0]).forEach(([key, value]) => {
    if(key === "noOfTickets"){     
     odataModel[key].time_created = "NewValue";
     }
}); */
            },

            // handleChange: function(oEvent){
            //     debugger;
            //     var date_time = oEvent.getParameters().value;
            // }

        });
    });