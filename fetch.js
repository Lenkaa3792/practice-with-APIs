document.getElementById( 'button' )
document.getElementById("inputValue");
document.getElementById( 'names' )
// document.getElementById( "desc" );
document.getElementById("cloud");
document.getElementById("wind");

document.getElementById( 'button' ).addEventListener( 'click', function ()
{
    fetch(
        'http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value + '&appid=4540ecbc96ddcc4dae4439a49eb37509'
    )
    .then( response => response.json() )
        .then( data => 
        {
            valueName = data['name']
            valueClouds = data["clouds"]['all'];
            valueTemp = data[ 'main' ][ 'temp' ]
             valueWind = data["wind"]['speed'];
//dropping them to WEB PAGE
            names.innerHTML = valueName;
            cloud.innerHTML = valueClouds;
            temp.innerHTML = valueTemp;
           wind.innerHTML = valueWind;
         
        } )
       
    

    
})
