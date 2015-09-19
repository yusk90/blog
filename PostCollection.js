(function(app) {
	app.PostCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage('SomeCollection'),
		model: app.PostModel
	});
})(app);