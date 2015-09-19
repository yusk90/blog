var app = {
	getTemplateByID: function(id) {
		return _.template($('#' + id).html());
	}
};