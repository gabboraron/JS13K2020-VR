var MAPISOPEN = false;
var SCENENR = 0;

var locations = [];
var openLocations = [];
function generateLoations() {
	//scene 1
	scene1= [];
				//type, posx, posy, posz, rotationx,rotationy,rotationz,width, height, color, function_name
	scene1.push(['a-plane',5, 2.6, -5, 0, 270, 0, 10, 5, 'darkgrey','']); 
	scene1.push(['a-plane',-5, 2.6, -5, 0, 90, 0, 10, 5, 'darkgrey','']);
	scene1.push(['a-plane',0, 2.6, -10, 0, 0, 0, 10, 5, 'darkgrey','']);
	scene1.push(['a-plane',0, 2.6, 0, 180, 0, 0, 10, 5, 'darkgrey','']);
	
	scene1.push(['a-plane',-1.35, 1.1, -7, -90, 90, 0, 0.5, 0.5, 'white','letter1']);
	scene1.push(['a-plane',-1.35, 1.05, -7, -90, 90, 0, 2, 5, '#7a5128','']);
	scene1.push(['a-box',-3.6, 0.5, -6.48, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	scene1.push(['a-box',-3.6, 0.5, -7.87, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	scene1.push(['a-box',0.83, 0.5, -7.87, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	scene1.push(['a-box',0.83, 0.5, -6.37, -90, 90, 0, 0.5, 0.5, '#7a5128','']);

	for (var i = 0; i < 6; i++) {
		scene1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#826744','']);
		i++;
		scene1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#915910','']);
	}

	for (var i = 0; i > -6; i--) {
		scene1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#915910','']);
		i--
		scene1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#826744','']);
	}

	locations[0] = scene1;

	scene2 = [];
	scene2.push(['a-plane',0, -1, -4, -90, 0, 0, 80, 80, '#4bb856','']);
	scene2.push(['a-plane',0, -0.5, -4, -90, 30, 0, 10, 85, '#cc9e5a','']);
	for (var i = 0; i < 100; i++) {
		scene2.push(['a-plane',Math.floor(Math.random()*350), 350, Math.floor(Math.random()*350), 90, 0, 0, 20, 5, '#e6fffc','']);
		scene2.push(['a-plane',Math.floor(Math.random()*350), 350, Math.floor(Math.random()*350)-350, 90, 0, 0, 20, 5, '#e6fffc','']);
		scene2.push(['a-plane',Math.floor(Math.random()*350)-350, 350, Math.floor(Math.random()*350), 90, 0, 0, 20, 5, '#e6fffc','']);
		scene2.push(['a-plane',Math.floor(Math.random()*350)-350, 350, Math.floor(Math.random()*350)-350, 90, 0, 0, 20, 5, '#e6fffc','']);
	}
	scene2.push(['a-cylinder',15, 1.861, 10, 0, 0, 0, 6, 4, 'brown','']);
	scene2.push(['a-sphere',13.910, 3.919, 8.201, 0, 0, 0, 0, 4, '#5e9400','']);
	scene2.push(['a-sphere',12.520, 3.762, 9.02, 0, 0, 0, 0, 4, '#279400','']);
	scene2.push(['a-sphere',12.734, 5.178, 8.490, 0, 0, 0, 0, 4, '#50a333','']);
	//bishop corpus 
	scene2.push(['a-cylinder',-5, -1.15, -4, -90, 0, 0, 0, 4, 'purple','deadbishop']);
	scene2.push(['a-cylinder',-6.836, -1.946, -2.981, -90, 80, 0, 0, 2, 'purple','deadbishop']);
	scene2.push(['a-cylinder',-3.883, -1.441, -2.981, -90, -40, 0, 0, 2, 'purple','deadbishop']);
	scene2.push(['a-sphere',-4.969, -0.694, -1.37, 0, 0, 0, 0, 4, 'purple','deadbishop']);
	//
	scene2.push(['a-box',-22.66, 1.143, -1.37, 0, 90, 10, 10, 2, '#543519','chariot']);
	scene2.push(['a-box',-19.37, 1.172, -1.37, 0, 90, 10, 10, 2, '#543519','chariot']);
	scene2.push(['a-box',-21.29, 0.113, 3.380, 0, 90, 10, 10, 0.5, '#b5773e','chariot']);
	scene2.push(['a-circle',-17.32, 0.031, -1.37, 0, 90, 10, 10, 0.5, '#944700','chariot']);
	locations[1] = scene2;

	scene3=[];
	scene3.push(['a-sphere',-14.487, -1.285, 11.869, -90, -70, 0, 3, 80, '#a87d32','digQ']);
	scene3.push(['a-plane',0, -0.5, -11.69, -90, -70, 0, 3, 80, '#47322e','traces']);
	scene3.push(['a-plane',0, -0.5, -4, -90, -70, 0, 3, 80, '#47322e','traces']);
	scene3.push(['a-plane',0, -1, -4, -90, 0, 0, 80, 80, '#bfa66b','']);
	scene3.push(['a-plane',0, 35, -4.827, 90, 0, 0, 80, 80, '#a88e2d','']);
	scene3.push(['a-plane',-56.45, 8.01, -19.42, 45, 45, 0, 80, 80, '#6e6c69','']);
	scene3.push(['a-plane',-71.0, 8.01, 23.843, 45, 145, 0, 80, 80, '#575451','']);
	scene3.push(['a-plane',-60.8, 10.954, -2.417, 45, 90, 0, 80, 80, '#828282','']);
	scene3.push(['a-plane',46.001, 35, -4.827, 85, 0, 0, 80, 80, '#bf7900','']);
	scene3.push(['a-plane',0, 35, -4.827, 50, 0, 0, 80, 80, '#ab8c57','']);
	scene3.push(['a-plane',0, -5.746, -33.9, 10, 0, 0, 80, 80, '#9c8a1a','']);
	scene3.push(['a-plane',53.709, -5.746, -51.77, 10, 35, 0, 80, 80, '#9c8a1a','']);
	scene3.push(['a-plane',2246.31, -5.746, -90.7, 10, -20, 0, 80, 80, '#9c8a1a','']);
	scene3.push(['a-plane',0, -0.522, 31.193, 220, 0, 0, 80, 80, '#5b5c48','']);
	scene3.push(['a-plane',79.95, -0.522, 19.6, 220, 40, 0, 80, 80, '#5b5c48','']);
	scene3.push(['a-plane',133.7, -0.522, -17, 220, 40, 0, 80, 80, '#ebca8d','']);
	scene3.push(['a-plane',0, 35, 16.962, -230, 0, 0, 80, 80, '#a89062','']);
	scene3.push(['a-plane',61.230, 35, 16.962, -230, 35, 0, 80, 80, '#8c7549','']);
	scene3.push(['a-plane',115.7, 35, -24.47, -230, 40, 0, 80, 80, '#a89062','']);
	scene3.push(['a-plane',0, 35, -4.827, -85, 0, 0, 80, 80, '#ba7e0b','']);
	scene3.push(['a-plane',61.763, 35, -29.37, -85, 0, 0, 80, 80, '#ba7e0b','']);
	locations[2] = scene3;
	//document.getElementById("locationsLoaded").innerHTML=".";
}

function showMap(e) {
	if (!MAPISOPEN) {
		MAPISOPEN = true;
		document.getElementById('mapopener').setAttribute('text', 'height: 4; align:center; value: +----------------+ \n |     back      |\n |   to scene  |\n +----------------+ ');
		document.getElementById('sky').setAttribute('color',"#1c3336");
		document.getElementById('playground').innerHTML="";

	    /*if (!ISMAPGENERATED) {*/
	    ///////	    
	    /*}else {*/
	    	tmpbuildings={};
	    	for (var i = buildings.length - 1; i >= 0; i--) {
	    		//tmpbuildings[i] = new createBuidling(buildings[posx],buildings[posy],posz,height);
	    		tmpbuildings[i] = new document.createElement('a-box');
   				tmpbuildings[i].setAttribute("color","#007a99");
   				tmpbuildings[i].setAttribute("height",buildings[i][3]);
   				tmpbuildings[i].setAttribute("position", {x: buildings[i][0], y: buildings[i][1], z: buildings[i][2]});
	    		//tmpbuildings[i] = new createBuidling(buildings[i][0],buildings[i][1],buildings[i][2],buildings[i][3]);
	    		document.getElementById('playground').appendChild(tmpbuildings[i]);
	    	}
	/*show open locations*/
	idx = buildings.length; 
	for (var i = openLocations.length - 1; i >= 0; i--) {
		/*
		tmp = []
		for(var idx = 0; idx <5; idx++){
			tmp[idx] = new document.createElement('a-sphere');
			tmp[idx].setAttribute('position',{x:openLocations[i][0], y: openLocations[i][1], z: 0});
			tmp[idx].setAttribute('radius',0.25);
			tmp[idx].setAttribute('color',"#a437b8");
			tmp[idx].setAttribute('animation',"property: position; to: "+openLocations[i][0]+" "+openLocations[i][1]+" 10; dur: 2000; loop: true");
			tmp[idx].setAttribute('onclick',"loadScene("+openLocations[3]+")");
	    	document.getElementById('playground').appendChild(tmp[idx]);
		}*/
		tmpbuildings[idx] = new document.createElement('a-box');
   		tmpbuildings[idx].setAttribute("color","tomato");
   		tmpbuildings[idx].setAttribute("height",100);
   		tmpbuildings[idx].setAttribute("onclick","changeScene("+openLocations[i][3]+")");
   		tmpbuildings[idx].setAttribute("position", {x: openLocations[i][0], y: 20, z: openLocations[i][1]});
	    document.getElementById('playground').appendChild(tmpbuildings[idx]);
	    idx++;
	    tmpbuildings[idx] = new document.createElement('a-text');
   		tmpbuildings[idx].setAttribute("color","white");
   		tmpbuildings[idx].setAttribute("value",openLocations[i][2]);
		tmpbuildings[idx].setAttribute("font", "mozillavr");	
		tmpbuildings[idx].setAttribute("width", "40");	
   		tmpbuildings[idx].setAttribute("onclick","changeScene("+openLocations[i][3]+")");
   		tmpbuildings[idx].setAttribute("position", {x: openLocations[i][0]+5, y: 20, z: openLocations[i][1]});
	    document.getElementById('playground').appendChild(tmpbuildings[idx]);
	    idx++;
	    tmpbuildings[idx] = new document.createElement('a-text');
   		tmpbuildings[idx].setAttribute("color","white");
   		tmpbuildings[idx].setAttribute("value",openLocations[i][2]);
		tmpbuildings[idx].setAttribute("font", "mozillavr");	
		tmpbuildings[idx].setAttribute("width", "40");	
   		tmpbuildings[idx].setAttribute("onclick","changeScene("+openLocations[i][3]+")");
   		tmpbuildings[idx].setAttribute("position", {x: openLocations[i][0]-5, y: 20, z: openLocations[i][1]});
   		tmpbuildings[idx].setAttribute("rotation", {x: 0, y: 180, z: 0});
	    document.getElementById('playground').appendChild(tmpbuildings[idx]);
	    idx++;
	}

	closeinvestigation();

	    /*}*/
	} else{
		//show scene
		MAPISOPEN = false;
		document.getElementById('mapopener').setAttribute('text', 'height: 4; align:center; value: +----------+ \n | show |\n |  map  |\n +----------+ ');
		document.getElementById('playground').innerHTML="";
		loadScene(SCENENR);
	}
}

function changeScene(sceneID){
	SCENENR = sceneID;
	showMap(0);
}

buildings = [];
function generateMap() {
	//generate map for the first time		    	
		    posx = 5;
		    posy= -1;
		    posz = -5;
		    height = 2

		    
		//  TO DO //
		// - tisztázni, a createBuilding() függvény argumentumába áttenni az értékeket, kevesebb ram és kevesebb kód miatt!!
		// /TO DO //

		    for (var i = 0; i <= 1000; i++) {
		    	//buildings[i] = new createBuidling(posx,posy,posz,height);
		    	height =  Math.floor(Math.random() * 5);
		    	posx =  Math.floor(Math.random()*50);
		    	posz =  Math.floor(Math.random()*50)-50;
		    	//document.getElementById('playground').appendChild(buildings[i]);
		    	buildings.push([posx,posy,posz,height]);
		    	
		    	i++;
		    	//buildings[i] = new createBuidling(posx,posy,posz,height);
		    	height =  Math.floor(Math.random() * 5);
		    	posx =  Math.floor(Math.random()*50)-50;
		    	posz =  Math.floor(Math.random()*50);
		    	//document.getElementById('playground').appendChild(buildings[i]);
		    	buildings.push([posx,posy,posz,height]);
		    	

		    	i++;
		    	//buildings[i] = new createBuidling(posx,posy,posz,height);
		    	height =  Math.floor(Math.random() * 5);
		    	posx =  Math.floor(Math.random()*50)-50;
		    	posz =  Math.floor(Math.random()*50)-50;
		    	//document.getElementById('playground').appendChild(buildings[i]);
		    	buildings.push([posx,posy,posz,height]);
		    	

		    	i++;
		    	//buildings[i] = new createBuidling(posx,posy,posz,height);
		    	height =  Math.floor(Math.random() * 5);
		    	posx =  Math.floor(Math.random()*50);
		    	posz =  Math.floor(Math.random()*50);
		    	//document.getElementById('playground').appendChild(buildings[i]);
		    	buildings.push([posx,posy,posz,height]);
		    }
}

function loadScene(sceneID) {
	document.getElementById('playground').innerHTML="";
	tmp={}
	for (var i = locations[sceneID].length - 1; i >= 0; i--) {
		tmp[i] = new document.createElement(locations[sceneID][i][0]);
		tmp[i].setAttribute("position", {x: locations[sceneID][i][1], y: locations[sceneID][i][2], z: locations[sceneID][i][3]});
		tmp[i].setAttribute("rotation", {x: locations[sceneID][i][4], y: locations[sceneID][i][5], z: locations[sceneID][i][6]});
		tmp[i].setAttribute("width", locations[sceneID][i][7]);
		tmp[i].setAttribute("height", locations[sceneID][i][8]);
		tmp[i].setAttribute("color", locations[sceneID][i][9]);
		tmp[i].setAttribute("onclick", locations[sceneID][i][10]+"()");

    	document.getElementById('playground').appendChild(tmp[i]);
	}
}



generateMap();
//document.getElementById("mapLoaded").innerHTML=".";
generateLoations();


function letter1() {
	letter = new document.createElement('a-text');
	letter.setAttribute("position", {x: -3, y: 2.6, z: -8});
	letter.setAttribute("color", "#26393d");
	letter.setAttribute("font", "mozillavr");
	letter.setAttribute("value", "1616, January, somewhere in russian-polish front \n \n I have seen our st cross at a russian troop. They was on the way to Smolensk. \n I am after them. \n we can meet in Smolensk in February. \n\n\n\n Bishop Bernard Maciejowski");
	letter.setAttribute("onclick","closeinvestigation()");

    document.getElementById('investigation').appendChild(letter);
    //open 2nd location on map
    openLocations[0] = [-45,-45,"Room with a letter",0];
    openLocations[1] = [10,-25,"Travel to Smolensk",1];
}

function deadbishop(){
	dbishop = new document.createElement('a-text');
	dbishop.setAttribute("position", {x: -5, y: 0.865, z: -0.564});
	dbishop.setAttribute("rotation", {x: -45, y: 90, z:0});
	dbishop.setAttribute("color", "white");
	dbishop.setAttribute("font", "mozillavr");
	dbishop.setAttribute("value", "Corpse of dead Bishop Bernard Maciejowski.");
	dbishop.setAttribute("onclick","closeinvestigation()");

    document.getElementById('investigation').appendChild(dbishop);

}

function chariot(){
	chariot = new document.createElement('a-text');
	chariot.setAttribute("position", {x: -13.17, y: 3.107, z: -0.3});
	chariot.setAttribute("rotation", {x: 0, y: 90, z:0});
	chariot.setAttribute("color", "white");
	chariot.setAttribute("font", "mozillavr");
	chariot.setAttribute("value", "Hmmm... \n There's mud on the chariot wheel.\n Where did that come from?");
	chariot.setAttribute("onclick","closeinvestigation()");

    document.getElementById('investigation').appendChild(chariot);

    addChariotRoute();
}

function addChariotRoute() {
	scene2.push(["a-plane",-18.11,-0.45,-5.725,-90,0,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",-23.05,-0.45,-8.135,-90,0,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",-16.35,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",-11.7,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",-10,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",-11.29,-0.45,-12.51,-90,90,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",3.295,-0.45,-12.58,-90,60,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",14.89,-0.45,-5.98,-90,60,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",27.57,-0.45,1.487,-90,60,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",1.8,-0.45,-9.265,-90,60,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",13.942,-0.45,-2.555,-90,60,0,2,15,"#47322e",'nearestCave']);
	scene2.push(["a-plane",25.01,-0.45,4.1,-90,60,0,2,15,"#47322e",'nearestCave']);
	/*scene2.push(["a-sphere",32.271,-0.37,8.4,-90,60,0,2,15,"#6e7075",'nearestCave']);
	scene2.push(["a-sphere",32.271,-0.308,7.31,-90,60,0,2,15,"#6e7570",'nearestCave']);
	scene2.push(["a-sphere",32.271,-0.308,5.606,-90,60,0,2,15,"#67706a",'nearestCave']);
	scene2.push(["a-sphere",0.0,-1,-4,-90,60,0,2,15,"#4b544e",'nearestCave']);
	scene2.push(["a-sphere",32.271,2.01,5.5,-90,60,0,2,15,"#6c6770",'nearestCave']);*/
	locations[1] = scene2;
	loadScene(1);
}

function nearestCave() {
	cave = new document.createElement('a-text');
	cave.setAttribute("position", {x: 19.39, y: 0, z: 3});
	cave.setAttribute("rotation", {x: 0, y: -90, z:0});
	cave.setAttribute("color", "#47322e");
	cave.setAttribute("width", 10);
	cave.setAttribute("font", "mozillavr");
	cave.setAttribute("value", "Looks like it came frome a nearby cave...");
	cave.setAttribute("onclick","closeinvestigation()");

    document.getElementById('investigation').appendChild(cave);
    openLocations[2] = [10,25,"The cave.",2];
}

function traces() {
	traces = new document.createElement('a-text');
	traces.setAttribute("position", {x: 15, y: 0, z: -6.720});
	traces.setAttribute("rotation", {x: 0, y: -90, z:0});
	traces.setAttribute("color", "#47322e");
	traces.setAttribute("width", 10);
	traces.setAttribute("font", "mozillavr");
	traces.setAttribute("value", "Hmm, what happened here?\n That chariot must be here, these are traces of it.");
	traces.setAttribute("onclick","closeinvestigation()");

    document.getElementById('investigation').appendChild(traces);
}

function digQ() {
	digq = new document.createElement('a-text');
	digq.setAttribute("position", {x: -6.140, y: 3.107, z: 11.869});
	digq.setAttribute("rotation", {x: 0, y: 120, z:0});
	digq.setAttribute("color", "#a87d32");
	digq.setAttribute("width", 10);
	digq.setAttribute("font", "mozillavr");
	digq.setAttribute("value", "Someone dig here...\nShould I dig here too?");
	digq.setAttribute("onclick","");
    document.getElementById('investigation').appendChild(digq);

    digy = new document.createElement('a-text');
	digy.setAttribute("position", {x: -6.729, y: 1.5, z: 11.869});
	digy.setAttribute("rotation", {x: 0, y: 110, z:0});
	digy.setAttribute("color", "white");
	digy.setAttribute("width", 10);
	digy.setAttribute("font", "mozillavr");
	digy.setAttribute("value", "Let's see it!");
	digy.setAttribute("onclick","");

    document.getElementById('investigation').appendChild(digy);

	scene3.push(['a-sphere',-13.055, -1.021, 11.458, -90, -70, 0, 3, 80, '#a87d32','halfcross']);	
	scene3.push(['a-sphere',-12.06, -1.313, 11.868, -90, -70, 0, 3, 80, '#a87d32','halfcross']);	
	scene3.push(['a-sphere',-12.637, 1.285, 11.869, -90, -70, 0, 3, 80, '#a87d32','halfcross']);	
	scene3.push(['a-sphere',-12.637, -0.672, 12.5589, -90, -70, 0, 3, 80, '#a87d32','halfcross']);	
	scene3.push(['a-sphere',-13.28, 0.355, 12.177, -90, -70, 0, 3, 80, '#a87d32','halfcross']);	

	locations[2] = scene3;
	loadScene(2);
}

function halfcross() {
	hcr1 = new document.createElement('a-box');
	hcr1.setAttribute("position",{x: -6.140, y: -10, z: 11.869});
	hcr1.setAttribute("rotation", {x: 0, y: 120, z:0});
	hcr1.setAttribute("color", "#ffa80f");
	hcr1.setAttribute("width", 3);
	hcr1.setAttribute("animation", "property: position; to: -12.365 5.228 12.148; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(hcr1);
	
	hcr3 = new document.createElement('a-box');
	hcr3.setAttribute("position",{x: -6.140, y: -10, z: 11.869});
	hcr3.setAttribute("rotation", {x: 0, y: 120, z:0});
	hcr3.setAttribute("color", "#ffa80f");
	hcr3.setAttribute("width", 4);
	hcr3.setAttribute("animation", "property: position; to: -12.605 2.338 12.299; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(hcr3);

	hcr2 = new document.createElement('a-box');
	hcr2.setAttribute("position",{x: -5.140, y: -10, z: 11.869});
	hcr2.setAttribute("rotation", {x: 0, y: 120, z:0});
	hcr2.setAttribute("color", "#ffa80f");
	hcr2.setAttribute("width", 1);
	hcr2.setAttribute("depth", 1);
	hcr2.setAttribute("height", 10);
	hcr2.setAttribute("animation", "property: position; to: -12.0 2 12; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(hcr2);


    digy = new document.createElement('a-text');
	digy.setAttribute("position", {x: -5.997, y: 7.094, z: 9.397});
	digy.setAttribute("rotation", {x: 0, y: 110, z:0});
	digy.setAttribute("color", "white");
	digy.setAttribute("width", 10);
	digy.setAttribute("font", "mozillavr");
	digy.setAttribute("value", "Oh, the cross!");
	digy.setAttribute("onclick","");

    document.getElementById('investigation').appendChild(digy);

}

function closeinvestigation() {
	document.getElementById('investigation').innerHTML="";
}