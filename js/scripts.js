(function($) {
  'use strict';

  if ( ! Modernizr.adownload ) {

  	var $link = $('a');

  	$link.each(function() {
  		var $download = $(this).attr('download');
  	
  		if (typeof $download !== typeof undefined && $download !== false) {
        var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"');
        $el.insertAfter($(this));
			}

  	});

  }

})(jQuery);