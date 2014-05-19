var propeller = new Object();
propeller.canvas=document.getElementById("canvas");
if(propeller.canvas.getContext){
	propeller.context=propeller.canvas.getContext("2d");
	 var img = new Image();   // Create new img element
  img.src = 'warrior.png'; // Set source path
  var warrior = {
    x: 0,
    y: 0
  };
  img.onload = function(){
    propeller.context.drawImage(img,x,y);
  };
} else {
 alert("A0-0007: Canvas Unsupported");
}

