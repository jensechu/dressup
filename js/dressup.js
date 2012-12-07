$(document).ready(function() {

    // Uses the title and img attr of the swatch item to
    // find the right body template div and change it's image src.
    function dressup(swatch) {
	var swatchPart = $(swatch).parent().attr("title");
	var swatchImage = $(swatch).children("img").attr("src");

	$("#"+swatchPart+" > img").attr({"src": swatchImage});
    }

    // Swatch Button
    $('#swatches li').click(function() {
	dressup(this);
    });

    // Reset Button
    // Takes imgs with class 'default' and sets them on the body.
    $('#reset').click(function() {
	
    });
	
    


});
