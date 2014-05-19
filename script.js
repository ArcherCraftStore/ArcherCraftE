
var canvas=document.getElementById("canvas");
if(canvas.getContext){
	context=canvas.getContext("2d");
	 var img = new Image();   // Create new img element
  img.src = 'warrior.png'; // Set source path
  var warrior = {
    x: 0,
    y: 0
  };
  img.onload = function(){
   context.drawImage(img,x,y);
  };
} else {
 alert("A0-0007: Canvas Unsupported");
}

