
$('.thumb a').click(function(e) {
    $('#myModal img').attr('src', $(this).attr('data-img-url')); 
});