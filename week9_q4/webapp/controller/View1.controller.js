sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("week9q4.controller.View1", {
            onInit: function () {

            },
            changeLang : function(){
                var dd = this.byId("dropdown1").getSelectedItem().getText()
                if (dd === "Arabic") {
                    sap.ui.getCore().getConfiguration().setLanguage("ar");
                    messagebundleLocal : "ar";
                } else if(dd === "French") {
                    sap.ui.getCore().getConfiguration().setLanguage("fr");
                    messagebundleLocal : "fr";
                }
                else{
                    sap.ui.getCore().getConfiguration().setLanguage("en");
                    messagebundleLocal : "en";
                }
            }
        });
    });
