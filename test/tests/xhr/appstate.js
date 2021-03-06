var DefineMap = require("can-define/map/map");
require("can-route");

module.exports = DefineMap.extend({
	list: {
		get: function(last, resolve) {
			var xhr = new XMLHttpRequest();

			xhr.addEventListener("load", function() {
				var results = JSON.parse(this.responseText);
				resolve(results);
			});

			xhr.open("GET", "http://localhost:8070/api/list");
			xhr.send();
		}
	}
});
