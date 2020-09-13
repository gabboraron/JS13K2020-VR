var MO = false;
var SN = 0;

var loc = [];
var oloc = [];
function gl() {
	//scene 1
	s1= [];
				//type, posx, posy, posz, rotationx,rotationy,rotationz,width, height, color, function_name
	s1.push(['a-plane',5, 2.6, -5, 0, 270, 0, 10, 5, 'darkgrey','']); 
	s1.push(['a-plane',-5, 2.6, -5, 0, 90, 0, 10, 5, 'darkgrey','']);
	s1.push(['a-plane',0, 2.6, -10, 0, 0, 0, 10, 5, 'darkgrey','']);
	s1.push(['a-plane',0, 2.6, 0, 180, 0, 0, 10, 5, 'darkgrey','']);
	
	s1.push(['a-plane',-1.35, 1.1, -7, -90, 90, 0, 0.5, 0.5, 'white','l1']);
	s1.push(['a-plane',-1.35, 1.05, -7, -90, 90, 0, 2, 5, '#7a5128','']);
	s1.push(['a-box',-3.6, 0.5, -6.48, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	s1.push(['a-box',-3.6, 0.5, -7.87, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	s1.push(['a-box',0.83, 0.5, -7.87, -90, 90, 0, 0.5, 0.5, '#7a5128','']);
	s1.push(['a-box',0.83, 0.5, -6.37, -90, 90, 0, 0.5, 0.5, '#7a5128','']);

	for (var i = 0; i < 6; i++) {
		s1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#826744','']);
		i++;
		s1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#915910','']);
	}

	for (var i = 0; i > -6; i--) {
		s1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#915910','']);
		i--
		s1.push(['a-plane',i, 0, -4, -90, 0, 0, 1, 14, '#826744','']);
	}

	loc[0] = s1;

	s2 = [];
	s2.push(['a-plane',0, -1, -4, -90, 0, 0, 80, 80, '#4bb856','']);
	s2.push(['a-plane',0, -0.5, -4, -90, 30, 0, 10, 85, '#cc9e5a','']);
/*	for (var i = 0; i < 100; i++) {
		s2.push(['a-plane',Math.floor(Math.random()*350), 350, Math.floor(Math.random()*350), 90, 0, 0, 20, 5, '#e6fffc','']);
		s2.push(['a-plane',Math.floor(Math.random()*350), 350, Math.floor(Math.random()*350)-350, 90, 0, 0, 20, 5, '#e6fffc','']);
		s2.push(['a-plane',Math.floor(Math.random()*350)-350, 350, Math.floor(Math.random()*350), 90, 0, 0, 20, 5, '#e6fffc','']);
		s2.push(['a-plane',Math.floor(Math.random()*350)-350, 350, Math.floor(Math.random()*350)-350, 90, 0, 0, 20, 5, '#e6fffc','']);
	}*/
	s2.push(['a-cylinder',15, 1.861, 10, 0, 0, 0, 6, 4, 'brown','']);
	s2.push(['a-sphere',13.910, 3.919, 8.201, 0, 0, 0, 0, 4, '#5e9400','']);
	s2.push(['a-sphere',12.520, 3.762, 9.02, 0, 0, 0, 0, 4, '#279400','']);
	s2.push(['a-sphere',12.734, 5.178, 8.490, 0, 0, 0, 0, 4, '#50a333','']);
	//bishop corpus 
	s2.push(['a-cylinder',-5, -1.15, -4, -90, 0, 0, 0, 4, 'purple','dbs']);
	s2.push(['a-cylinder',-6.836, -1.946, -2.981, -90, 80, 0, 0, 2, 'purple','dbs']);
	s2.push(['a-cylinder',-3.883, -1.441, -2.981, -90, -40, 0, 0, 2, 'purple','dbs']);
	s2.push(['a-sphere',-4.969, -0.694, -1.37, 0, 0, 0, 0, 4, 'purple','dbs']);
	//
	s2.push(['a-box',-22.66, 1.143, -1.37, 0, 90, 10, 10, 2, '#543519','cha']);
	s2.push(['a-box',-19.37, 1.172, -1.37, 0, 90, 10, 10, 2, '#543519','cha']);
	s2.push(['a-box',-21.29, 0.113, 3.380, 0, 90, 10, 10, 0.5, '#b5773e','cha']);
	s2.push(['a-circle',-17.32, 0.031, -1.37, 0, 90, 10, 10, 0.5, '#944700','cha']);
	loc[1] = s2;

	s3=[];
	s3.push(['a-sphere',-14.487, -1.285, 11.869, -90, -70, 0, 3, 80, '#a87d32','digQ']);
	s3.push(['a-plane',0, -0.5, -11.69, -90, -70, 0, 3, 80, '#47322e','traces']);
	s3.push(['a-plane',0, -0.5, -4, -90, -70, 0, 3, 80, '#47322e','traces']);
	s3.push(['a-plane',0, -1, -4, -90, 0, 0, 80, 80, '#bfa66b','']);
	s3.push(['a-plane',0, 35, -4.827, 90, 0, 0, 80, 80, '#a88e2d','']);
	s3.push(['a-plane',-56.45, 8.01, -19.42, 45, 45, 0, 80, 80, '#6e6c69','']);
	s3.push(['a-plane',-71.0, 8.01, 23.843, 45, 145, 0, 80, 80, '#575451','']);
	s3.push(['a-plane',-60.8, 10.954, -2.417, 45, 90, 0, 80, 80, '#828282','']);
	s3.push(['a-plane',46.001, 35, -4.827, 85, 0, 0, 80, 80, '#bf7900','']);
	s3.push(['a-plane',0, 35, -4.827, 50, 0, 0, 80, 80, '#ab8c57','']);
	s3.push(['a-plane',0, -5.746, -33.9, 10, 0, 0, 80, 80, '#9c8a1a','']);
	//s3.push(['a-plane',53.709, -5.746, -51.77, 10, 35, 0, 80, 80, '#9c8a1a','']);
	s3.push(['a-plane',2246.31, -5.746, -90.7, 10, -20, 0, 80, 80, '#9c8a1a','']);
	s3.push(['a-plane',0, -0.522, 31.193, 220, 0, 0, 80, 80, '#5b5c48','']);
	s3.push(['a-plane',79.95, -0.522, 19.6, 220, 40, 0, 80, 80, '#5b5c48','']);
	s3.push(['a-plane',133.7, -0.522, -17, 220, 40, 0, 80, 80, '#ebca8d','']);
	s3.push(['a-plane',0, 35, 16.962, -230, 0, 0, 80, 80, '#a89062','']);
	s3.push(['a-plane',61.230, 35, 16.962, -230, 35, 0, 80, 80, '#8c7549','']);
	s3.push(['a-plane',115.7, 35, -24.47, -230, 40, 0, 80, 80, '#a89062','']);
	//s3.push(['a-plane',0, 35, -4.827, -85, 0, 0, 80, 80, '#ba7e0b','']);
	//s3.push(['a-plane',61.763, 35, -29.37, -85, 0, 0, 80, 80, '#ba7e0b','']);
	loc[2] = s3;
	//document.getElementById("locLoaded").innerHTML=".";
}

function sm(e) {
	if (!MO) {
		MO = true;
		document.getElementById('mapopener').setAttribute('text', 'height: 4; align:center; value: +----------------+ \n |     back      |\n |   to scene  |\n +----------------+ ');
		document.getElementById('sky').setAttribute('color',"#1c3336");
		document.getElementById('playground').innerHTML="";

	    /*if (!ISMAPGENERATED) {*/
	    ///////	    
	    /*}else {*/
	    	tb={};
	    	for (var i = b.length - 1; i >= 0; i--) {
	    		//tb[i] = new createBuidling(b[posx],b[posy],posz,height);
	    		tb[i] = new document.createElement('a-box');
   				tb[i].setAttribute("color","#007a99");
   				tb[i].setAttribute("height",b[i][3]);
   				tb[i].setAttribute("position", {x: b[i][0], y: b[i][1], z: b[i][2]});
	    		//tb[i] = new createBuidling(b[i][0],b[i][1],b[i][2],b[i][3]);
	    		document.getElementById('playground').appendChild(tb[i]);
	    	}
	/*show open loc*/
	idx = b.length; 
	for (var i = oloc.length - 1; i >= 0; i--) {
		/*
		tmp = []
		for(var idx = 0; idx <5; idx++){
			tmp[idx] = new document.createElement('a-sphere');
			tmp[idx].setAttribute('position',{x:oloc[i][0], y: oloc[i][1], z: 0});
			tmp[idx].setAttribute('radius',0.25);
			tmp[idx].setAttribute('color',"#a437b8");
			tmp[idx].setAttribute('animation',"property: position; to: "+oloc[i][0]+" "+oloc[i][1]+" 10; dur: 2000; loop: true");
			tmp[idx].setAttribute('onclick',"ls("+oloc[3]+")");
	    	document.getElementById('playground').appendChild(tmp[idx]);
		}*/
		tb[idx] = new document.createElement('a-box');
   		tb[idx].setAttribute("color","tomato");
   		tb[idx].setAttribute("height",100);
   		tb[idx].setAttribute("onclick","cs("+oloc[i][3]+")");
   		tb[idx].setAttribute("position", {x: oloc[i][0], y: 20, z: oloc[i][1]});
	    document.getElementById('playground').appendChild(tb[idx]);
	    idx++;
	    tb[idx] = new document.createElement('a-text');
   		tb[idx].setAttribute("color","white");
   		tb[idx].setAttribute("value",oloc[i][2]);
		tb[idx].setAttribute("font", "mozillavr");	
		tb[idx].setAttribute("width", "40");	
   		tb[idx].setAttribute("onclick","cs("+oloc[i][3]+")");
   		if (oloc.length == 3) {
   			tb[idx].setAttribute("position", {x: oloc[i][0]-5, y: 20, z: oloc[i][1]});
   			tb[idx].setAttribute("rotation", {x: 0, y: 180, z: 0});
   		}else{
   			tb[idx].setAttribute("position", {x: oloc[i][0]+5, y: 20, z: oloc[i][1]});
   		}
	    document.getElementById('playground').appendChild(tb[idx]);
	    idx++;/*
	    tb[idx] = new document.createElement('a-text');
   		tb[idx].setAttribute("color","white");
   		tb[idx].setAttribute("value",oloc[i][2]);
		tb[idx].setAttribute("font", "mozillavr");	
		tb[idx].setAttribute("width", "40");	
   		tb[idx].setAttribute("onclick","cs("+oloc[i][3]+")");
   		tb[idx].setAttribute("position", {x: oloc[i][0]-5, y: 20, z: oloc[i][1]});
   		tb[idx].setAttribute("rotation", {x: 0, y: 180, z: 0});
	    document.getElementById('playground').appendChild(tb[idx]);*/
	    /*tb[idx] = tb[idx-1];
   		tb[idx].setAttribute("position", {x: oloc[i][0]-5, y: 20, z: oloc[i][1]});
   		tb[idx].setAttribute("rotation", {x: 0, y: 180, z: 0});
	    document.getElementById('playground').appendChild(tb[idx]);*/
	    idx++;
	}

	ci();

	    /*}*/
	} else{
		//show scene
		MO = false;
		document.getElementById('mapopener').setAttribute('text', 'height: 4; align:center; value: +----------+ \n | show |\n |  map  |\n +----------+ ');
		document.getElementById('playground').innerHTML="";
		ls(SN);
	}
}

function cs(sid){
	SN = sid;
	sm(0);
}

b = [];
function gm() {
	//generate map for the first time		    	
		    //posx = 5;
		    //posy= -1;
		    //posz = -5;
		    //height = 2

		    
		//  TO DO //
		// - tisztázni, a createBuilding() függvény argumentumába áttenni az értékeket, kevesebb ram és kevesebb kód miatt!!
		// /TO DO //

		    for (var i = 0; i <= 1000; i++) {
		    	//b[i] = new createBuidling(posx,posy,posz,height);
		    	//height =  Math.floor(Math.random() * 5);
		    	//posx =  Math.floor(Math.random()*50);
		    	//posz =  Math.floor(Math.random()*50)-50;
		    	//document.getElementById('playground').appendChild(b[i]);
		    	//b.push([posx,posy,posz,height]);
		    	b.push([Math.floor(Math.random()*50),-1,Math.floor(Math.random()*50)-50,Math.floor(Math.random() * 5)]);
		    	
		    	i++;
		    	//b[i] = new createBuidling(posx,posy,posz,height);
		    	//height =  Math.floor(Math.random() * 5);
		    	//posx =  Math.floor(Math.random()*50)-50;
		    	//posz =  Math.floor(Math.random()*50);
		    	//document.getElementById('playground').appendChild(b[i]);
		    	b.push([Math.floor(Math.random()*50)-50,-1,Math.floor(Math.random()*50),Math.floor(Math.random() * 5)]);
		    	

		    	i++;
		    	//b[i] = new createBuidling(posx,posy,posz,height);
		    	//height =  Math.floor(Math.random() * 5);
		    	//posx =  Math.floor(Math.random()*50)-50;
		    	//posz =  Math.floor(Math.random()*50)-50;
		    	//document.getElementById('playground').appendChild(b[i]);
		    	b.push([Math.floor(Math.random()*50)-50,-1,Math.floor(Math.random()*50)-50,Math.floor(Math.random() * 5)]);
		    	

		    	i++;
		    	//b[i] = new createBuidling(posx,posy,posz,height);
		    	//height =  Math.floor(Math.random() * 5);
		    	//posx =  Math.floor(Math.random()*50);
		    	//posz =  Math.floor(Math.random()*50);
		    	//document.getElementById('playground').appendChild(b[i]);
		    	b.push([Math.floor(Math.random()*50),-1,Math.floor(Math.random()*50),Math.floor(Math.random() * 5)]);
		    }
}

function ls(sid) {
	document.getElementById('playground').innerHTML="";
	tmp={}
	for (var i = loc[sid].length - 1; i >= 0; i--) {
		tmp[i] = new document.createElement(loc[sid][i][0]);
		tmp[i].setAttribute("position", {x: loc[sid][i][1], y: loc[sid][i][2], z: loc[sid][i][3]});
		tmp[i].setAttribute("rotation", {x: loc[sid][i][4], y: loc[sid][i][5], z: loc[sid][i][6]});
		tmp[i].setAttribute("width", loc[sid][i][7]);
		tmp[i].setAttribute("height", loc[sid][i][8]);
		tmp[i].setAttribute("color", loc[sid][i][9]);
		tmp[i].setAttribute("onclick", loc[sid][i][10]+"()");

    	document.getElementById('playground').appendChild(tmp[i]);
	}
}



gm();
//document.getElementById("mapLoaded").innerHTML=".";
gl();


function l1() {
	l = new document.createElement('a-text');
	l.setAttribute("position", {x: -3, y: 2.6, z: -8});
	l.setAttribute("color", "#26393d");
	l.setAttribute("font", "mozillavr");
	l.setAttribute("value", "1616, January, somewhere in russian-polish front \n \n I have seen our st cross at a russian troop. They was on the way to Smolensk. \n I am after them. \n we can meet in Smolensk in February. \n\n\n\n Bishop Bernard Maciejowski");
	l.setAttribute("onclick","ci()");

    document.getElementById('investigation').appendChild(l);
    //open 2nd location on map
    oloc[0] = [-45,-45,"Room with a letter",0];
    oloc[1] = [10,-25,"Travel to Smolensk",1];
}

function dbs(){
	ds = new document.createElement('a-text');
	ds.setAttribute("position", {x: -5, y: 0.865, z: -0.564});
	ds.setAttribute("rotation", {x: -45, y: 90, z:0});
	ds.setAttribute("color", "white");
	ds.setAttribute("font", "mozillavr");
	ds.setAttribute("value", "Corpse of dead Bishop Bernard Maciejowski.");
	ds.setAttribute("onclick","ci()");

    document.getElementById('investigation').appendChild(ds);

}

function cha(){
	c = new document.createElement('a-text');
	c.setAttribute("position", {x: -13.17, y: 3.107, z: -0.3});
	c.setAttribute("rotation", {x: 0, y: 90, z:0});
	c.setAttribute("color", "white");
	c.setAttribute("font", "mozillavr");
	c.setAttribute("value", "Hmmm... \n There's mud on the chariot wheel.\n Where did that come from?");
	c.setAttribute("onclick","ci()");

    document.getElementById('investigation').appendChild(c);

    acr();
}

function acr() {
	s2.push(["a-plane",-18.11,-0.45,-5.725,-90,0,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",-23.05,-0.45,-8.135,-90,0,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",-16.35,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",-11.7,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",-10,-0.45,-16.141,-90,90,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",-11.29,-0.45,-12.51,-90,90,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",3.295,-0.45,-12.58,-90,60,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",14.89,-0.45,-5.98,-90,60,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",27.57,-0.45,1.487,-90,60,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",1.8,-0.45,-9.265,-90,60,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",13.942,-0.45,-2.555,-90,60,0,2,15,"#47322e",'nca']);
	s2.push(["a-plane",25.01,-0.45,4.1,-90,60,0,2,15,"#47322e",'nca']);
	/*s2.push(["a-sphere",32.271,-0.37,8.4,-90,60,0,2,15,"#6e7075",'nca']);
	s2.push(["a-sphere",32.271,-0.308,7.31,-90,60,0,2,15,"#6e7570",'nca']);
	s2.push(["a-sphere",32.271,-0.308,5.606,-90,60,0,2,15,"#67706a",'nca']);
	s2.push(["a-sphere",0.0,-1,-4,-90,60,0,2,15,"#4b544e",'nca']);
	s2.push(["a-sphere",32.271,2.01,5.5,-90,60,0,2,15,"#6c6770",'nca']);*/
	loc[1] = s2;
	ls(1);
}

function nca() {
	cave = new document.createElement('a-text');
	cave.setAttribute("position", {x: 19.39, y: 0, z: 3});
	cave.setAttribute("rotation", {x: 0, y: -90, z:0});
	cave.setAttribute("color", "#47322e");
	cave.setAttribute("width", 10);
	cave.setAttribute("font", "mozillavr");
	cave.setAttribute("value", "Looks like it came frome a nearby cave...");
	cave.setAttribute("onclick","ci()");

    document.getElementById('investigation').appendChild(cave);
    oloc[2] = [10,25,"The cave.",2];
}

function traces() {
	tr = new document.createElement('a-text');
	tr.setAttribute("position", {x: 15, y: 0, z: -6.720});
	tr.setAttribute("rotation", {x: 0, y: -90, z:0});
	tr.setAttribute("color", "#47322e");
	tr.setAttribute("width", 10);
	tr.setAttribute("font", "mozillavr");
	tr.setAttribute("value", "Hmm, what happened here?\n That chariot must be here, these are traces of it.");
	tr.setAttribute("onclick","ci()");

    document.getElementById('investigation').appendChild(tr);
}

function digQ() {
	d = new document.createElement('a-text');
	d.setAttribute("position", {x: -6.140, y: 3.107, z: 11.869});
	d.setAttribute("rotation", {x: 0, y: 120, z:0});
	d.setAttribute("color", "#a87d32");
	d.setAttribute("width", 10);
	d.setAttribute("font", "mozillavr");
	d.setAttribute("value", "Someone dig here...\nShould I dig here too?");
	d.setAttribute("onclick","");
    document.getElementById('investigation').appendChild(d);

    dy = new document.createElement('a-text');
	dy.setAttribute("position", {x: -6.729, y: 1.5, z: 11.869});
	dy.setAttribute("rotation", {x: 0, y: 110, z:0});
	dy.setAttribute("color", "white");
	dy.setAttribute("width", 10);
	dy.setAttribute("font", "mozillavr");
	dy.setAttribute("value", "Let's see it!");
	dy.setAttribute("onclick","");

    document.getElementById('investigation').appendChild(dy);

	s3.push(['a-sphere',-13.055, -1.021, 11.458, -90, -70, 0, 3, 80, '#a87d32','crx']);	
	s3.push(['a-sphere',-12.06, -1.313, 11.868, -90, -70, 0, 3, 80, '#a87d32','crx']);	
	s3.push(['a-sphere',-12.637, 1.285, 11.869, -90, -70, 0, 3, 80, '#a87d32','crx']);	
	s3.push(['a-sphere',-12.637, -0.672, 12.5589, -90, -70, 0, 3, 80, '#a87d32','crx']);	
	s3.push(['a-sphere',-13.28, 0.355, 12.177, -90, -70, 0, 3, 80, '#a87d32','crx']);	

	loc[2] = s3;
	ls(2);
}

function crx() {
	c1 = new document.createElement('a-box');
	c1.setAttribute("position",{x: -6.140, y: -10, z: 11.869});
	c1.setAttribute("rotation", {x: 0, y: 120, z:0});
	c1.setAttribute("color", "#ffa80f");
	c1.setAttribute("width", 3);
	c1.setAttribute("animation", "property: position; to: -12.365 5.228 12.148; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(c1);
	
	c2 = new document.createElement('a-box');
	c2.setAttribute("position",{x: -6.140, y: -10, z: 11.869});
	c2.setAttribute("rotation", {x: 0, y: 120, z:0});
	c2.setAttribute("color", "#ffa80f");
	c2.setAttribute("width", 4);
	c2.setAttribute("animation", "property: position; to: -12.605 2.338 12.299; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(c2);

	c3 = new document.createElement('a-box');
	c3.setAttribute("position",{x: -5.140, y: -10, z: 11.869});
	c3.setAttribute("rotation", {x: 0, y: 120, z:0});
	c3.setAttribute("color", "#ffa80f");
	c3.setAttribute("width", 1);
	c3.setAttribute("depth", 1);
	c3.setAttribute("height", 10);
	c3.setAttribute("animation", "property: position; to: -12.0 2 12; dur: 2000; loop: false");

    document.getElementById('investigation').appendChild(c3);


    dy = new document.createElement('a-text');
	dy.setAttribute("position", {x: -5.997, y: 7.094, z: 9.397});
	dy.setAttribute("rotation", {x: 0, y: 110, z:0});
	dy.setAttribute("color", "white");
	dy.setAttribute("width", 10);
	dy.setAttribute("font", "mozillavr");
	dy.setAttribute("value", "Oh, the cross!");
	dy.setAttribute("onclick","");

    document.getElementById('investigation').appendChild(dy);

}

function ci() {
	document.getElementById('investigation').innerHTML="";
}