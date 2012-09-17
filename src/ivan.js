/**
 * Ivan 
 *
 * @author azrael
 * @version 1.0
 */
;(function(undefined){

	//.version
	var version = '1.0';
	///version

	/**
	 * package a namespace
	 * @param {String} ns   namespace
	 * @param {Function} func function
	 */
	var Ivan = function(ns, func){
		var list = ns.split('.');
		var pack = Ivan;
		for(var i in list){
			if(!(list[i] in pack)){
				pack[list[i]] = {};
			}
			pack = pack[list[i]];
		}
		return func.apply(pack, Ivan);
	}

	Ivan.version = version;

	// for NodeJS
	if(typeof exports !== 'undefined'){
		exports.Ivan = Ivan;
	}
	// for Browser
	else if(typeof window !== 'undefined'){
		window.Ivan = Ivan;
	}

}());