$(document).ready(function() {

    // Uses the title and img attr of the swatch item to
    // find the right body template div and change it's image src.
    function dressup(swatch) {
	var swatchPart = $(swatch).parent().attr("title");
	var swatchImage = $(swatch).children("img").attr("src");

	$("#"+swatchPart+" > img").attr({"src": swatchImage});
    }

    // Sets the body to use only the swatches with a default class.
    function reset_dressup() {
	$('.default').each(function(){
	    dressup(this);
	});
    }

    // Set the body to defaults onload.
    reset_dressup();

    // Swatch Button
    $('#swatches li').click(function() {
	dressup(this);
    });

    // Reset Button
    // Takes imgs with class 'default' and sets them on the body.
    $('#reset').click(function() {
	reset_dressup();
    });
	
    


});
