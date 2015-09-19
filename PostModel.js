(function(app) {
	app.PostModel = Backbone.Model.extend({
		defaults: {
			title: '',
			descr: '',
			content: '',
			publishDate: ''
		}
	});
})(app);