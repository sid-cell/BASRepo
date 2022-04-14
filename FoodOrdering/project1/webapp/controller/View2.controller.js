sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.project1.controller.View2", {
            onInit: function () {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.getRoute("RouteView2").attachPatternMatched(this._onRouteMatched,this);
            },
            toView1: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            _onRouteMatched: function(oEvent){
                
                var order = oEvent.getParameter("arguments").order;
                var model = this.getView().getModel("data");
                var orderDetails = model.getProperty("/selectedItems");
                model.setProperty("/orderNumber",order);
                var string;
                orderDetails.filter(function(element){
                    if(string){
                        string = string + "," + element.name + "x" + element.count;

                    }else{
                        string = element.name + "x" + element.count
                    }
                });
                var hotel = model.getProperty("/hotelName");
                model.setProperty("/string",string);
                var obj ={
                    hotelName:hotel,
                    string:string
                }

                var orderHistory = model.getProperty("/orderHistory");
                orderHistory.push(obj);
                model.setProperty("/orderHistory",orderHistory);
                
                model.refresh();
            }
        }
        );
    }
);
