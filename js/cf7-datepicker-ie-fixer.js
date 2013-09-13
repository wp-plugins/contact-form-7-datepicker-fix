jQuery(document).ready(function($) {
	function isInternetExplorer() {
		var isMSIE = eval("/*@cc_on!@*/0");
		var isMSIE2 = ('\v' == 'v');
		
		return (isMSIE || isMSIE2);
	};
	
	
	function addSpinnerToObject(object) {
		var options = {};
		var min = object.attr('min');
		var max = object.attr('max');
		var step = object.attr('step');

		if (min != "undefined" && min != undefined) {
			options.min = min;
		}

		if (max != "undefined" && max != undefined) {
			options.max = max;
		}

		if (step != "undefined" && step != undefined) {
			options.step = step;
		}

		object.spinner(options);
	}

	if (isInternetExplorer()) {
		$.each($('[type="date"][class*="wpcf7-date"]'), function() {
			$(this).datepicker({
				autoclose : true,
				dateFormat : 'dd.mm.yy'
			});
		});

		$.each($('[type="number"][class*="wpcf7-number"]'), function() {
			addSpinnerToObject($(this));
		});

		$.each($('[type="text"][class*="wpcf7-number"]'), function() {
			addSpinnerToObject($(this));
		});

	}
});