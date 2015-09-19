(function(app) {
	app.PostView = Backbone.View.extend({
		tagName: 'article',
		template: app.getTemplateByID('article-template'),
		render: function() {
			var attrs = this.model.toJSON(),
				template = this.template(attrs);

			this.$el.html(template);
			return this;
		}
	});
})(app);