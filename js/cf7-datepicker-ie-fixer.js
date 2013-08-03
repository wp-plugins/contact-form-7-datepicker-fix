jQuery(document).ready(function($){
	if ($.browser.msie){
		$.each($('[type="date"]'), function(){
			$(this).datepicker({
			 autoclose: true,
			 dateFormat: 'dd.mm.yy'
			});
		});
	}
});