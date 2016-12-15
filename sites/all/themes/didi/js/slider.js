(function($){

	$(document).ready(function(){

$('img').attr("oncontextmenu","return false");
		
		var titles = $(".portfolio-titles");
		var hrefs = $("#slider-portfolio ul li a");
		/*for( var i=0; i < titles.length; i++){
			console.log(titles.eq(i).html());
		}*/
		var titlesInMenu = $("#slider-portfolio ol li a");
		for( var i=0; i < titlesInMenu.length; i++){
			titlesInMenu.eq(i).html(titles.eq(i).html());
titlesInMenu.eq(i).attr('href',hrefs.eq(i).attr('href'));
		}
$( "#slider-portfolio ol li a" ).click(function( event ) {
  	event.preventDefault();
	window.location.href = $(this).attr('href');
});

// colorbox

$('a.colorbox').colorbox({rel:'img-wedding'});

//

$('#ajaxcontent').ready(function(){
$('img').attr("oncontextmenu","return false");
});

});

})(jQuery);		