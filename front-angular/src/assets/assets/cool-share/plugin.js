(function($){$.fn.shareButtons=function(url,options){if(typeof url==='object'){options=url;url=window.location.href}
options=$.extend({twitter:!0,facebook:!0,googlePlus:!0,pinterest:!0,tumblr:!0},options);var url_encoded=encodeURIComponent(url);var shareURLs={'twitter':'https://twitter.com/intent/tweet?url='+url_encoded,'facebook':'https://facebook.com/sharer.php?u='+url_encoded,'googlePlus':'https://plus.google.com/share?url='+url_encoded,'tumblr':'http://www.tumblr.com/share/link?url='+url_encoded,'pinterest':'https://pinterest.com/pin/create/button?url='+url_encoded};if(options.twitter){if(options.twitter.text){shareURLs.twitter+='&text='+encodeURIComponent(options.twitter.text)}
if(options.twitter.via){shareURLs.twitter+='&via='+encodeURIComponent(options.twitter.via)}}
if(options.tumblr){if(options.tumblr.name){shareURLs.tumblr+='&name='+encodeURIComponent(options.tumblr.name)}
if(options.tumblr.description){shareURLs.tumblr+='&description='+encodeURIComponent(options.tumblr.description)}}
if(options.pinterest){if(options.pinterest.media){shareURLs.pinterest+='&media='+encodeURIComponent(options.pinterest.media)}
if(options.pinterest.description){shareURLs.pinterest+='&description='+encodeURIComponent(options.pinterest.description)}}
this.each(function(i){var elem=$(this);elem.addClass('socialPlugin');elem.append('<span class="socials"></span>');var socialButtonsPopUp=elem.find('.socials');if(options.twitter){socialButtonsPopUp.append($('<a class="fa fa-twitter" href="'+shareURLs.twitter+'" ></a></a>'))}
if(options.facebook){socialButtonsPopUp.append($('<a class="fa fa-facebook" href="'+shareURLs.facebook+'" ></a>'))}
if(options.googlePlus){socialButtonsPopUp.append($('<a class="fa fa-google-plus" href="'+shareURLs.googlePlus+'" ></a>'))}
if(options.pinterest){socialButtonsPopUp.append($('<a class="fa fa-pinterest" href="'+shareURLs.pinterest+'" ></a>'))}
if(options.tumblr){socialButtonsPopUp.append($('<a class="fa fa-tumblr" href="'+shareURLs.tumblr+'" ></a>'))}});var socials=$('.socialPlugin .socials'),socialLength=socials.find('a').length,marginLeft='330';$('.socialPlugin a').click(function(e){e.preventDefault();var url=this.href,w=500,h=400,left=(screen.width/2)-(w/2),top=(screen.height/2)-(h/2);window.open(url,'Social Share','toolbar=no, location=no, directories=no, status=no,'+' menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left)});$(document).off('.social-plugin').on('click.social-plugin touchstart.social-plugin',function(e){if(!$(e.target).hasClass('showSocialButtons')&&!$(e.target).parent().hasClass('socials')){socials.removeClass('opened')}});return this}})(jQuery)