$(document).ready(function(){
	$(".views").hide(); 
	setTimeout(function() {
        $(".initial").fadeOut(5000, "swing" ,function(){
        	$(".secondView").show()});
    },5000);




