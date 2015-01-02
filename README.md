#\#findmymetro

##A simple app to find metro itineraries

###[Live Site here](http://jocolina.com/findmymetro)

##Description
----
This app is designed to help people (specially tourists) find their way on the metro of where they are. You simply put the metro stop you are in, and the one you want to go to, and the 
app calculates possible itineraries to that stop. It can easily calculate times and complicate itineraries.
It can also calculate itineraries to "remarkable" spots (Eiffel Tower, etc), given they are in the database.

##Database Format
The database of this site is very simple, and coded in JSON format, for simple use and accessibility. The JSON DB will be public, and anyone can contribute to the site by making pull 
requests on the `db.json` file.

	The template of what the base should look like is:
```javascript

var cityName = { // City
	name: "nameOfCity",
	numberOfLines : (int), //number of lines the city has
	lines:[], //array containing all lines of the metro and their stops
	locations: [["locationName", lineStation]], array containing the locationName and the nearest station (can be repeated) 
}

var lines = { // Line
	name: "nameOfLine",
	numberOfStops: (int),
	number: (int), //the number of the line
	stops:[], //array containing all the stops the line makes, by name
}

cities.push(createCity(cityName, lines));

```