$(document).ready(function() {
    
    // Retrieves the swatch cateogory from the unordered list's
    // title attribute and gives it to the switcher.
    $('#swatches li').click(function() {
	var swatchPart = $(this).parent().attr("title");
	var swatchImage = $(this).children("img").attr("src");

	console.log(swatchPart);
	console.log(swatchImage);

	dressup(swatchPart, swatchImage);
    });

    // Uses the title and img attr of the swatch item to
    // find the right body template div and change it's image src.
    function dressup(swatchPart, swatchImage) {
	$("#"+swatchPart+" > img").attr({"src": swatchImage});
    }
	
    


});
