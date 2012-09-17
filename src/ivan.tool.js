
Ivan('tool', function(){

	var canvas = null;

	this.getCanvas = function(){
		//TODO for NodeJS, it should be node-canvas
		if(!canvas && document && document.createElement){
			canvas = document.createElement('canvas');
		}
		return canvas;
	}

});