sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.project1.controller.View1", {
            onInit: function () {
                var model = this.getView().getModel("data");
                model.setProperty("/selectedHotel","ginger");
                var hotels = model.getProperty("/Hotels");
                hotels.filter(function(hotelSelected){
                        if(hotelSelected.key==="ginger"){
                            model.setProperty("/menu",hotelSelected.menu)
                        }
                })
            }
        });
    });
