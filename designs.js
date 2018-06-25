// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function(){
	$('#sizePicker').submit(function(event){
		// prevent the backend process
		event.preventDefault();

		// get values of height and width
		let  pixHeight = $('#inputHeight').val();
		let  pixWidth = $('#inputWidth').val();

		//call on funtions

		makeGrid(pixHeight, pixWidth);
		addColor();
	});
});



// perform the funtion activity using a function expression

const makeGrid = function(height, width){
	//Remove all existing rows.
	$('tr').remove();

	//create grid
	for(let row = 1; row <= height; row++){
		$('#pixelCanvas').append('<tr></tr>');
		for(let col = 1; col <= width; col++){
			$('tr').filter(':last').append('<td></td>');
		}
	}
}

// apply color to each cell.
const addColor = function(){
	$('td').click(function(){
	const color = $('#colorPicker').val();

		//effect color
		($( this ).attr('style')) ? $( this ).removeAttr('style') : $( this ).attr('style','background-color:' + color);
	});
}
