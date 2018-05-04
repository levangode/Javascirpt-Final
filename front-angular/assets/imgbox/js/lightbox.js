// $('.thumbox').on('click', function(e) {
//   e.preventDefault();
//   var id = $(this).attr('data-id');
//   var img = $(this).attr('src');
//   if ($(this).hasClass('video')) {
//     $('body').append('<div class="active"><iframe class="video-preview"  src="//www.youtube.com/embed/' + id + '?rel=0"" ></iframe><span class="close"">&times;</span></div>');
//   } else {
//     $('body').append('<div class="active"><img src="' + img + '" /><span class="close"">&times;</span></div>');
//   }

// });

// $('body').delegate('.close', 'click', function() {
//   $('.active').addClass('inactive');
//   setTimeout(function() {
//     $('.active').remove();
//   }, 200);
// });