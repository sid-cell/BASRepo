/*global QUnit*/

sap.ui.define([
	"comcar/assignment6/controller/Question3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Question3 Controller");

	QUnit.test("I should test the Question3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
