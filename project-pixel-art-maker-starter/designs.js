
var height, width, color;


$('#sizePicker').submit( function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

$('#canvasPicker input').on('change', function() {
  
    if($('input[name=canvasSize]:checked','#canvasPicker').val() == 'S'){
        $("tr").css("height", "20px");
        $("td").css("width", "20px")
    } else if($('input[name=canvasSize]:checked','#canvasPicker').val() == 'M'){
        $("tr").css("height", "40px");
        $("td").css("width", "40px")
    } else{
        $("tr").css("height", "60px");
        $("td").css("width", "60px")
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

