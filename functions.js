//start js here
//game window. dont want player to move past the screen
//boulder-player collision

$(document).ready(function(){

document.onkeydown = checkKey;
document.onkeyup = stopPlayer;

var score = 0;
var roundNum=1;
var scoreIntervalId = setInterval(function(){
	score++;
	$('#val').text(""+score);
//console.log(score);
	}, 200);
	
$("#roundVal").text(roundNum);
	
var gameWindow =  new GameWindow('gameWindow');
var mPlayer = new Player($('#player'),gameWindow);
//var playerDiv =  document.getElementById("player");
//var gameWindow =  document.getElementById("gameWindow");
var keyPressed=false;
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
	// console.log(mPlayer.getLeftMargin());
	if (e.keyCode == '37') {
		if(keyPressed){
			return;
		}
		keyPressed=true;

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
			$('#runText').css("margin-left", (parseInt($('#runText').css("margin-left"))+2)+'px'   );
	
	   }
	  
    }
    else if (e.keyCode == '39') {
		if(keyPressed)
			return;
		keyPressed=true;
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
			$('#runText').css("margin-left", (parseInt($('#runText').css("margin-left"))-2)+'px'   );
	
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
	keyPressed=false;
	//change player animation to standing still
	$('#player').css("background-image",  "url('./assets/sprites/UpsidedownStanding.gif')");
	
}


function moveDeathBoulder(){
	$("#giantBoulder").animate({top: '-1500px'},10000-(roundNum*600), function(){
		
userWon();
		
	});

	

	
}
moveDeathBoulder();

function  userWon(){
	var playerLeftMargin = mPlayer.getLeftMargin();
	if(playerLeftMargin >= 900 || playerLeftMargin <= 100){
		
		var s=confirm("You WON!. Continue");
		console.log(s);
		if(s){
			roundNum++;
			$("#roundVal").text(roundNum);
			$("#giantBoulder").animate({top: '800px'},10);
			$('#player').css("margin-left","450px");

			moveDeathBoulder();
		}else{
			location.reload();
		}
	}else{
		var x =confirm("You LOST! Your score was : "+score+" Would you like to go again?");
		console.log(x);
		if(x){
			location.reload();
		}else{
			clearInterval(scoreIntervalId);
		}
			
	
	}
}
});
