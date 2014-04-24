var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);


var hellohello = function(){
	var message = document.getElementById("hellohello");
	message.setAttribute("class", "");
};

var showhellowButton = document.getElementById("showhellow");
showhellowButton.addEventListener("click", hellohello);
