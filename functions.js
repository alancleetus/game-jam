//start js here
//game window. dont want player to move past the screen
//boulder-player collision

$(document).ready(function(){

document.onkeydown = checkKey;
document.onkeyup = stopPlayer;


var gameWindow =  new GameWindow('gameWindow');
var mPlayer = new Player($('#player'),gameWindow);
//var playerDiv =  document.getElementById("player");

//var gameWindow =  document.getElementById("gameWindow");

function checkKey(e) {
	
    e = e || window.event;

  /*  if (e.keyCode == '38') {
        // up arrow
		// move player down
		//increase top margin
    }
    else if (e.keyCode == '40') {
        // down arrow
		// move player up
    }
    else */
	 console.log(mPlayer.getLeftMargin());
	if (e.keyCode == '37') {
       // left arrow
	   // move player right
	   //set player to right moving animation
		mPlayer.moveRight();
		
	   //validate that player isn't already out of bounds, if so, move to end of right side
	   if(mPlayer.isOutsideRightBoundry()){
		   mPlayer.setToRightSideOfGameWindow();
	   }else{
		   //move backgrounds
		   	$('#parallaxLayer1').css("margin-left", (parseInt($('#parallaxLayer1').css("margin-left"))+3)+'px'   );
			$('#parallaxLayer2').css("margin-left", (parseInt($('#parallaxLayer2').css("margin-left"))+1)+'px'   );
	
	   }
	  
    }
    else if (e.keyCode == '39') {
       // right arrow
	   // move player left
	   //set player to left moving animation

	   mPlayer.moveLeft();
	    //validate that player isn't already out of bounds, if so, move to end of right side
	   if(mPlayer.isOutsideLeftBoundry()){
		   mPlayer.setToLeftSideOfGameWindow();
	   }else{
		   	$('#parallaxLayer1').css("margin-left", (parseInt($('#parallaxLayer1').css("margin-left"))-3)+'px'   );
			$('#parallaxLayer2').css("margin-left", (parseInt($('#parallaxLayer2').css("margin-left"))-1)+'px'   );
	
	   }
    }

	
	// move asteroid/boulder-player
	
	//detect collision
	//if collision occurs
		//game end
	//else continue

	
	//after every 5 seconds increase freqency  and increase speed every 7 seconds of boulders
	
	
	

}





function stopPlayer(){
	//change player animation to standing still

}
});