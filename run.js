$(function() {
	/*window.abccoll = new app.PostCollection();
	window.abccoll.create(
		{
			title: 'Title1',
			descr: 'weferf erferger gergergerg erger',
			publishDate: '01.02.2015',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quis voluptas optio vitae, voluptatum labore quidem praesentium quasi nesciunt quia!'
		}
	);
	window.abccoll.create(
		{
			title: 'Title2',
			descr: 'weferf erferger gergergerg erger',
			publishDate: '01.02.2015',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quis voluptas optio vitae, voluptatum labore quidem praesentium quasi nesciunt quia!'
		}
	);*/
	var mainView = new app.MainView({
		//collection: window.abccoll
		collection: new app.PostCollection()
	});
});