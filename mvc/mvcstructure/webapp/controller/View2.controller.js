sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function (Controller) {
    "use strict";

    return Controller.extend("com.mvcstructure.controller.View2", {
        onInit: function () {
            var router = sap.ui.core.UIComponent.getRouterFor(this);
            //Catching the argument passed by View1
            router.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched,this);
        },
        _onRouteMatched: function(oEvent){
            //Printing the argument passed by View1 into View2
             var name = oEvent.getParameter("arguments").name;
             sap.m.MessageToast.show("View 2"+name);       
        },
        navToView1: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    }
    )
});
