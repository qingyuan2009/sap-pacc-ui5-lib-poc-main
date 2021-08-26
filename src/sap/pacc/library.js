sap.ui.define(function() {

	"use strict";

	/**
	 * The sap.pacc library provides a model to build state of the art UI5 applications in context of health industries
	 *
	 * @namespace
	 * @name sap.pacc.ui5.poc
	 * @author SAP SE
	 * @version ${version}
	 * @public
	 */
	sap.ui.getCore().initLibrary({
		name : "sap.pacc",
		version : "${version}",
		noLibraryCSS: true,
		dependencies : [ "sap.ui.core" ],
		controls : [ ],
		types : [ ]
	});

	return sap.pacc;
});