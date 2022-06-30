document.getElementById( 'button' )
document.getElementById("inputValue");
document.getElementById( 'name' )
document.getElementById( "desc" );


document.getElementById( 'button' ).addEventListener( 'click', function ()
{
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value + '&appid=4540ecbc96ddcc4dae4439a49eb37509'
    )
    .then( response => response.json() )
        .then( data => console.log( data ) )
    
    .catch(err=> alert('wrong city'))

    
})
