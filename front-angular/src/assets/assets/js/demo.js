$(function (){

	

	var options = {

		twitter: {
			text: 'საქართველოს განათლებისა და მეცნიერების სამინისტრო',
			via: 'mes.gov.ge'
		},

		facebook : true,
		googlePlus : true
	};

	$('.socialShare').shareButtons(url, options);


/*

	// You can also share to pinterest and tumblr:

	var options = {

		// Pinterest requires a image to be "pinned"

		pinterest: {
			media: 'http://example.com/image.jpg',
			description: 'My lovely picture'
		},

		// Tumblr takes a name and a description

		tumblr: {
			name: 'jQuery Social Buttons Plugin!',
			description: 'There is a new article on tutorialzine.com page! Check out!'
		}
	};

*/

});
