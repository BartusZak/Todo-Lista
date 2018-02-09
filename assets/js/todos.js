//dodajemy toggle po naciscnicu li
//dodajemy on zeby przypisac event listener do nowo tworzonych li
$("ul").on("click","li",function(){
	$(this).toggleClass('selected');
});

//Click on X delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Zatrzymujemy propagacje click listenerów
	event.stopPropagation();
});

//po naciscniecu ENTER dodaje <li> 
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		//grabbing new text from input
		var todoText = $(this).val();
		//czyszcze input
		$(this).val("");

		//create new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '</li>')
	}
});

$("h1").on("click",".fa-plus", function(){
	$("input[type='text']").fadeToggle();
	});