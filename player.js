class Player{
	
	constructor(playerId,gameWindow){
		this.player = $('#'+playerId);
		this.gameWindow = gameWindow;
		this.health = 3;
	}
	
	private moveRight(){
		player.css("marginLeft") = (getLeftMargin() + getSpeed()) + 'px';
	}
	
	private moveLeft(){
		player.css("marginLeft") = (getLeftMargin() - getSpeed()) + 'px';
	}
	
	private getSpeed(){
		switch(getHealth()) {
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
	
	private isOutsideRightBoundry(){
		//player leftmargin + player width > game window width
		return getLeftMargin() + getWidth() > gameWindow.getWidth();			
	}
	
	private isOutsideLeftBoundry(){
		//player leftmargin < 0
		return getLeftMargin() < 0;			
	}
	
	private setToRightSideOfGameWindow(){
		// player left margin = game window width - player width
		player.css("marginLeft") =  (gameWindow.getWidth() - getWidth()) +'px';
	}
	
	private setToLeftSideOfGameWindow(){
		player.css("marginLeft") = '0px';
	}
	
	private getLeftMargin(){
		return parseInt(player.css("marginLeft"), 10);
	}
	
	private getRightMargin(){
		return parseInt(player.css("marginRight"), 10);
	}
	
	private getWidth(){
		return parseInt(player.css("offsetWidth"),10); 
	}
	
	private getHeight(){
		return parseInt(player.css("offsetHeight"),10); 
	}
	
	private getHealth{
		return this.health;
	}
}