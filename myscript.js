$(document).ready(function() {
	$(".imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	
	
});

$(".intro").click(function(){
  $(".disappear").toggle();
});

$(".imagetoggler").hover(function(){
  alert("click me, bet you cant lol");	

});

});
