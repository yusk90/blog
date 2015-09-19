(function(app) {
	app.MainView = Backbone.View.extend({
		el: 'body',
		initialize: function() {
			//debugger;
			this.listenTo(this.collection, 'reset', this.onReset);
			this.collection.fetch({reset: true});
			//debugger;
		},
		onReset: function() {
			this.collection.each(function(model) {
				var view = new app.PostView({
					model: model
				});
				this.$('section').append(view.render().el);
			}, this);
		}
	});
})(app)