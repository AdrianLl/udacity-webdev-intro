
var height, width, color;


$('#sizePicker').submit( function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

$('#canvasPicker input').on('change', function() {
  
  if($('input[name=canvasSize]:checked','#canvasPicker').val() == 'S'){
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
  } else if($('input[name=canvasSize]:checked','#canvasPicker').val() == 'M'){
    height = $('#inputHeight').val() * 2;
    width = $('#inputWidth').val() * 2;
    makeGrid(height, width);
  }
  
  
});


function makeGrid(heightVal, widthVal) {

    $('tr').remove();

    for ( var i = 1; i <= heightVal; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>'); 
        for(var j = 1; j <= widthVal; j++){
            $('#table' + i).append('<td></td>');
        }
    }

    $('td').mousedown(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')){
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
    
    }