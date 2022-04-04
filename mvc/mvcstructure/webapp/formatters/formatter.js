sap.ui.define([], function () {
	"use strict";
	return {
		dateFormat: function(dob){
            var date = new Date(dob).toDateString();
            return date;
        }
	};
});