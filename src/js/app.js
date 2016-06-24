(function($, app){

	console.log('my-note app.js');
	var $header = $('.header');
	var $memo = $('#memo')
	var initData = app.util.storage.load();

	
	
	$header.on('click', '.btn-fullscreen', function(event){

		app.BtnAction.fullScreen();

	});

	$header.on('click','.btn-about' , function(){

		app.BtnAction.about();
	});

	$header.on('click','.btn-savenote' ,function(){

		app.view.addTodo();

	});

	$header.on('click', '.btn-newnote' ,function(){
		$memo.val('');
		
	});


	if(initData.length >= 1) {
		console.log(initData)
		// app.collection.set( initData );
		$memo.val(initData[(initData.length-1)].value)
	}

})(jQuery, NoteApp);
