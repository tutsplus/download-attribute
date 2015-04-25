(function($) {
  'use strict';

  var $usernameChange       = $('#change-username'),
      $usernameChangeDialog = $('#confirm-change'),
      $accountDelete        = $('#delete-account'),
      $accountDeleteDialog  = $('#confirm-delete'),
      transition;


  $usernameChange.on('click', function() {
    $usernameChangeDialog[0].showModal();
    transition = setTimeout(function() {
        $usernameChangeDialog.addClass('dialog-scale');
    }, 0.5);
  });

  $accountDelete.on('click', function() {
    $accountDeleteDialog[0].showModal();
    transition = setTimeout(function() {
        $accountDeleteDialog.addClass('dialog-scale');
    }, 0.5);
  });

  $('.site-dialog').on('click', '.btn-cancel', function() {
    var $parent = $(this).offsetParent();
    $parent[0].close();
    $parent.removeClass('dialog-scale');
    clearTimeout(transition);
  });

})(jQuery);