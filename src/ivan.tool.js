//.CommonJS
var Ivan = {};
///CommonJS

Ivan.tool = {}

var canvas = null, ctx = null;

Ivan.tool.getCanvasContext = function (createNew) {
	if(!canvas && document && document.createElement){
		canvas = document.createElement('canvas');
		if(canvas.getContext){
			ctx = canvas.getContext('2d');
		}
	}
	if(createNew && canvas && canvas.getContext){
		ctx = canvas.getContext('2d');
	}
	return ctx;
}

//.CommonJS
exports.tool = Ivan.tool;
///CommonJS