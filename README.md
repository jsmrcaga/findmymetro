#\#findmymetro

##A simple app to find metro itineraries

###[Live Site here](http://jocolina.com/findmymetro)

##Description
----
	This app is designed to help people (specially tourists) find their way on the metro of where they are. You simply put the metro stop you are in, and the one you want to go to, and the 
app calculates possible itineraries to that stop. It can easily calculate times and complicate itineraries.
It can also calculate itineraries to "remarkable" spots (Eiffel Tower, etc), given they are in the database.

##Database Format
	The database of this site is very simple, and coded in JSON format, for simple use and accessibility. All JSON files will be public, and anyone can contribute to the site by making pull 
requests.

	The template of what the base should look like is:
```javascript

{ // City
	name: "nameOfCity",
	numberOfLines : (int), //number of lines the city has
	lines:[], //array containing all lines of the metro and their stops
	locations: [["locationName", lineStation]], array containing the locationName and the nearest station (can be repeated) 
}

{ // Line
	name: "nameOfLine",
	numberOfStops: (int),
	number: (int), //the number of the line
	stops:[], //array containing all the stops the line makes, by name
}
```