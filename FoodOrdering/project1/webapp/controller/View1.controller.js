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
                var model = this.getOwnerComponent().getModel("data");
                model.setProperty("/orderHistory",[]);
            },


            onSelectHotel: function (oInput) {
                var key = oInput.getSource().getSelectedKey();
                var model = this.getView().getModel("data");
                model.setProperty("/selectedHotel",key); //setting the selectedhotel value which will be used in order summary
                //  model.setProperty("/orderHistory",[]);
                var hotels = model.getProperty("/Hotels");
                hotels.filter(function (hotelSelected) {
                    if (hotelSelected.key === key) {
                        model.setProperty("/menu", hotelSelected.menu);
                        hotelSelected.menu.filter(function (menu) {
                            menu.count = 0; //For resetting everything to zero if we change hotels
                        })
                    }
                });
                model.setProperty("/total", 0); //setting the total also 0

                model.refresh();
            },


            onQuantityChange: function (oEvent) {

                var quantity = oEvent.getSource().getValue(); //To get the value of stepInput
                var model = this.getView().getModel("data");
                var total = 0;
                var oData = oEvent.getSource().getBindingContext("data").getObject(); //To get all the binded items in tha particular listitem
                var menu = model.getProperty("/menu"); //it contains the menu of the selected hotel
                menu.filter(function (element) { //
                    total = total + (element.price * element.count);

                });
                model.setProperty("/total", total);
                model.refresh();
            },

            openDialog: function(){
                var selectItems = [];
                var model = this.getView().getModel("data");
                var selectedHotel = model.getProperty("/selectedHotel");
                var hotels = model.getProperty("/Hotels");
                hotels.filter(function(element){
                    if(element.key === selectedHotel){
                        model.setProperty("/hotelName",element.name);
                        element.menu.filter(function(menuItem){
                            if(menuItem.count !== 0){
                                selectItems.push(menuItem);
                            }
                        })
                    }
                });

                model.setProperty("/selectedItems",selectItems);

                if(selectItems.length !==0){

                
                            if (!this.pDialog) {
                                this.pDialog = this.loadFragment({
                                    name: "com.project1.fragment.orderSummary"
                                });
                            }
                            this.pDialog.then(function (oDialog) {
                                oDialog.open();
                            });
                }else{
                                sap.m.MessagetToast.show("Please select atleast one item!");
                }
            },


            toView2: function(){
                var orderNo = Math.floor(Math.random()*10);
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("RouteView2",{
                    "order":orderNo
                });
            },

            orderHistory: function(){
                
                if (!this.oHistory) {
                    this.oHistory = this.loadFragment({
                        name: "com.project1.fragment.orderHistory"
                    });
                }
                this.oHistory.then(function (oHistory) {
                    oHistory.open();
                });
            },
            cancel: function(){
                this.pDialog.close();
            },
            cancelHistory:function(){
                this.oHistory.close();
            }
        });
    });
