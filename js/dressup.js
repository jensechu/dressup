$(document).ready(function() {
    
    // Retrieves the swatch cateogory from the unordered list's
    // title attribute and gives it to the switcher.
    $('#swatches li ').click(function() {
	var bodyPart = $(this).parent().attr("title");
	console.log(bodyPart);
    });
	
    


});
