// Template for Metro Cities and Lines
function city (name){
	this.name =name;
	this.numberOfLines = 0;
	this.lines = [];  //array of lines
	this.locations = [["location", lineStation]]; //array of notable locations followed by the nearest line station
};

function line (number, name) {
	this.numberOfStops = 0;
	this.name = name;
	this.number = number;
	this.stops = []; //array listing all the stops (by name)

};