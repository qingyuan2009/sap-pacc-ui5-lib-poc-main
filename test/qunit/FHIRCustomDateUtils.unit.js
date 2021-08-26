sap.ui.define(["sap/pacc/ui5/poc/FHIRCustomDateUtils"], function (FHIRCustomDateUtils) {
	"use strict";

	QUnit.module("Unit-Tests: FHIRCustomDateUtils", {});

	QUnit.test("Test formatDate method", function (assert) {
		assert.strictEqual(FHIRCustomDateUtils.formatDate(), "");
		assert.strictEqual(FHIRCustomDateUtils.formatDate("2020-11-23"), "Nov 23, 2020");
	});

});