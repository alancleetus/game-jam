//start js here
//game window. dont want player to move past the screen
//boulder-player collision

document.onkeydown = checkKey;
var gameWindow =  new GameWindow('gameworld')
var player = new Player('player',gameWindow);
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
	if (e.keyCode == '37') {
       // left arrow
	   // move player right
		player.moveRight();
		
	   //validate that player isn't already out of bounds, if so, move to end of right side
	   if(!player.isOutsideRightBoundry()){
		   player.setToRightSideOfGameWindow();
	   }
    }
    else if (e.keyCode == '39') {
       // right arrow
	   // move player left
	   player.moveLeft();
	    //validate that player isn't already out of bounds, if so, move to end of right side
	   if(!player.isOutsideLeftBoundry()){
		   player.setToLeftSideOfGameWindow();
	   }
    }

	
	// move asteroid/boulder-player
	
	//detect collision
	//if collision occurs
		//game end
	//else continue

	
	//after every 5 seconds increase freqency  and increase speed every 7 seconds of boulders
	
	
	

}