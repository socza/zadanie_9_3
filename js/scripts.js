// First version

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
	dinosaur = "triceratops".toUpperCase(),
	replace = text.replace('Velociraptor', dinosaur),
	replaceNew = replace.length/2;

console.log(replace.substr(0,replaceNew));

// Second version

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.",
	dinosaur = "triceratops".toUpperCase(),
	replace = text.replace('Velociraptor', dinosaur);
	//replaceNew = replace.length/2;

console.log(replace.substr(0,replace.length/2));