
var height, width, color;


$('#sizePicker').submit( function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})


function makeGrid(heightVal, widthVal) {

    $('tr').remove();

    for ( var i = 1; i <= heightVal; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); 
        for(var j = 1; j <= widthVal; j++){
            $('#table' + i).append('<td></td>');
        }
    }

}
    