class Player{
	
	
	constructor(playerSelector,gameWindow){
		this.player = $("#player");
		this.gameWindow = gameWindow;
		this.health = 3;

	}
	
	 moveRight(){
		this.player.css("margin-left",  ((this.getLeftMargin() + this.getSpeed()) + 'px'));
	}
	
	 moveLeft(){
		this.player.css("margin-left",(this.getLeftMargin() - this.getSpeed()) + 'px');

	}
	
	getSpeed(){
		switch(this.getHealth()) {
			case 1:
			   return 30;
				break;
			case 1:
				return 20;
				break;
			case 3:
				return 10;
				break;
			default:
				return 0;
		}
	}
	
	 isOutsideRightBoundry(){
		//player leftmargin + player width > game window width
		return this.getLeftMargin() + this.getWidth() > this.gameWindow.getWidth();			
	}
	
	 isOutsideLeftBoundry(){
		//player leftmargin < 0
		return this.getLeftMargin() < 0;			
	}
	
	 setToRightSideOfGameWindow(){
		// player left margin = game window width - player width
		this.player.css("margin-left",  (this.gameWindow.getWidth() - this.getWidth()) +'px');
	}
	
	 setToLeftSideOfGameWindow(){
		this.player.css("margin-left",'0px');
	}
	
	 getLeftMargin(){
		return parseInt(this.player.css("margin-left"));
	}
	
	
	 getWidth(){
		return parseInt(this.player.css("offsetWidth"),10); 
	}
	
	 getHeight(){
		return parseInt(this.player.css("offsetHeight"),10); 
	}
	
	 getHealth(){
		return this.health;
	}
}