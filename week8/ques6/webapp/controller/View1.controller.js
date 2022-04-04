sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ques6.controller.View1", {
            onInit: function () {

            },
            onclick : function(){
                // var oView = this.getView();
                // if(!this.byId("fragment1")){
                //     Fragment.load({
                //         id: oView.getId(),
                //         name: "ques6.view.Success"
                //     }).then(function(oDialog){
                //         oView.addDependent(oDialog);
                //         oDialog.open();
                //     })
                // }else{
                //     this.byId("Success").open();
                // }
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "ques6.view.Success"
                    });
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });

            }
        });
    });
