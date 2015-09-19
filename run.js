$(function() {
	//window.abccoll = new app.PostCollection();
	/*abccoll.create([
		{
			title: 'Title1',
			descr: 'weferf erferger gergergerg erger',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quis voluptas optio vitae, voluptatum labore quidem praesentium quasi nesciunt quia!'
		},
		{
			title: 'Title2',
			descr: 'weferf erferger gergergerg erger',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quis voluptas optio vitae, voluptatum labore quidem praesentium quasi nesciunt quia!'
		},
		{
			title: 'Title3',
			descr: 'weferf erferger gergergerg erger',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quis voluptas optio vitae, voluptatum labore quidem praesentium quasi nesciunt quia!'
		}
	])*/
	var mainView = new app.MainView({
		//collection: abccoll
		collection: new app.PostCollection()
	});
});