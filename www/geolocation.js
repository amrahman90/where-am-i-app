var options;

window.onload = function()
{
	init();
}

function init()
{
	document.getElementById('btnLocation').style.display = "block";
	options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
}

function getLocation()
{
	navigator.geolocation.getCurrentPosition(success, failure, options);   
}

function success(position)
{
	var latitude = position.coords.latitude;
	var long = position.coords.longitude;

	var out = "<strong>Latitude:</strong> " + latitude;
	out += "<br/><strong>Longitude: </strong> " + long; 
	document.getElementById('result').innerHTML = out;

	var mapOptions = {
	        center: { lat: latitude, lng: long},
	        zoom: 15
	}; 
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function failure(message)
{
	alert("Error:" + message.message);
}

function clearScreen()
{
	document.getElementById('map-canvas').innerHTML = "";
	document.getElementById('map-canvas').style.backgroundColor = "white";
	document.getElementById('result').innerHTML = "";
}
