var propeller = new Object();
propeller.canvas=document.getElementById("canvas");
if(propeller.canvas.getContext){
	propeller.context=propeller.canvas.getContext("2d");
}else{
	alert("A0-0007: Canvas Unsupported");
}