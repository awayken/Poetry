/*jslint devel: false, browser: false, white: true */
/*global $: false, window: false */

(function () {
	"use strict";

	window.NAME = {
		init: function () {
			this.method();
		},

		method: function () {}
	};

	$(window.document).ready(function () {
		window.NAME.init();
	});
}());
