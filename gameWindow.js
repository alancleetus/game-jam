class GameWindow{
	
	
	constructor(gameWindowId){
		this.gameWindow = $('#'+gameWindowId);
	}
	
	private getWidth(){
		return gameWindow.width();
	}
	
	private getHeight(){
		return gameWindow.height();
	}
}