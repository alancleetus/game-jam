class boulder
{
	constructor(boulderId,gameWindow)
	{
		this.boulder = $(boulderId);
		this.gameWindow = gameWindow;
		this.speed = 10;
	}
	
	moveUp(){
		this.player.css("margin-bottom",  ((this.getBottomMargin() + this.getSpeed()) + 'px'));
	}
	
	getSpeed(){
		return this.speed;
	}
	
	 isOutsideTopBoundry(){
		//boulder bottom margin > 1000
		return this.getBottomMargin() > gameWindow.;
	}
	
	
	 getTopMargin(){
		return parseInt(this.player.css("margin-top"));
	}
	
}