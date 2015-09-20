(function(app) {
	app.PostCollection = Backbone.Collection.extend({
		localStorage: new Backbone.LocalStorage('PostCollection'),
		model: app.PostModel
	});
})(app);