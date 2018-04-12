
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



    $(document).ready(function() {

        // Define initial variables for height and width of grid
          const height = $('#inputHeight');
          const width = $('#inputWidth');
          const pixelCanvas = $('#pixelCanvas');
          const colorPicker = $('#colorPicker');
          const sizePicker = $('#sizePicker');
        
        // Select size input based on user input
          sizePicker.submit(function(s)
          {
            s.preventDefault();
            let heightVal = height.val();
            let widthVal = width.val();
            makeGrid(heightVal, widthVal);
          });
        // End sizePicker
        
        // When user inputs variables for height and width, call makeGrid()
        // Grid is created
          function makeGrid(height, width)
          {
        // Grid is cleared
            pixelCanvas.empty();
        // Create new grid
        // Create rows
            for (let row = 0; row < height; row++)
              {
              let tableRow = $('<tr></tr>');
        // Create columns
              for (let col = 0; col < width; col++)
                {
                let tableCell = $('<td></td>');
        // Append table data to create grid
                tableRow.append(tableCell);
                }// End col for loop
              // Add tr to table
              pixelCanvas.append(tableRow);
              }// End row for loop
            }// End makeGrid function
        
        // Add color when clicked
          pixelCanvas.on('click', 'td', function()
          {
            let colorVal = colorPicker.val();
            $(this).css('background-color', colorVal);
          });// End color
        

        
          // Mousedown for color true/false
            let mouseDown = false;
            pixelCanvas.mousedown(function()
            {
              mouseDown = true;
            });// End mousedown true
            pixelCanvas.mouseup(function()
        
            {
              mouseDown = false;
            });// End mousedown for color
            // Use mouse dragging to color multiple pixel’s at once (Brush feature)
              pixelCanvas.on('mousemove', 'td', function(paint)
              {
                paint.preventDefault();
                let colorVal = colorPicker.val();
                if (mouseDown)
                {
                  $(this).css('background-color', colorVal);
                }// End mousedown if
              });// End coloring
            });
        