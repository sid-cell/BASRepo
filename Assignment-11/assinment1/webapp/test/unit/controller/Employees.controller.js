/*global QUnit*/

sap.ui.define([
	"assinment1/controller/Employees.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Employees Controller");

	QUnit.test("I should test the Employees controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
