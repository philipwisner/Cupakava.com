$(document).on('ready', function(){
  $('.btn-group button').on('click', function(e){
    e.preventDefault();
    $('.coffee').attr('data-type', $(this).attr('data-nav'));
  }).eq(0).trigger('click');
});
