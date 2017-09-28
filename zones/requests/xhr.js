var xhrResolveUrl = require("./xhr-resolve-url");
var xhrCookies = require("./xhr-cookies");
var xhrCache = require("./xhr-cache");

module.exports = function(request, options){
	return {
		plugins: [
			xhrCache,
			xhrResolveUrl(request),
			xhrCookies(request, options || {})
		]
	};
};
