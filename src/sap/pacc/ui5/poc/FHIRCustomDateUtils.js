/*!
 * ${copyright}
 */
// Provides class sap.pacc.ui5.poc.FHIRCustomDateUtils
sap.ui.define(["sap/ui/core/format/DateFormat"], function (DateFormat) {

	"use strict";

	/**
     * Constructor for a new FHIRCustomDateUtils
     *
     * @alias sap.pacc.ui5.poc.FHIRCustomDateUtils
     * @author SAP SE
     * @class
     * @classdesc Implementation of functions which can be reused in context of the FHIR standard
     * @public
     * @since 1.0.0
     * @version ${version}
     */
	var FHIRCustomDateUtils = {};

	/**
     * Checks if the given <code>sParameter</code> is a valid path parameter inside the given <code>mParameters</code>
     *
     * @returns {object} The locale object.
     * @protected
     */
	FHIRCustomDateUtils.getLocale = function () {
		var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
		var oLocale = new sap.ui.core.Locale(sCurrentLocale);
		return oLocale;
	};

	/**
     * formats a date into ex. "Nov 23, 2020"
     * @returns {string} The formatted version of sDate.
     * @param {string} sDate A string compatible with the constructor of Date.
     * @public
     */
	FHIRCustomDateUtils.formatDate = function (sDate) {
		if (sDate) {
			var oDateFormat = DateFormat.getDateInstance({
				style: "medium"
			}, this.getLocale());
			var sResult = oDateFormat.format(new Date(sDate));
			return sResult;
		}
		return "";
	};
	return FHIRCustomDateUtils;
});