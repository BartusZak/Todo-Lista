//dodajemy toggle po naciscnicu li
$("li").click(function(){
	$(this).toggleClass('selected');
});

//Click on X delete Todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Zatrzymujemy propagacje click listenerów
	event.stopPropagation();

});