$(document).ready(function(){
	
	
	
	
	$("#info1").click(function(){
		$("#exinfo").css("visibility", "visible");
		
		});
	$("#close").click(function(){
	$("#exinfo").css("visibility", "hidden");
	});
	
	
	$("#close").mouseover(function(){
		$("#close").css("backgroundColor", "#fb8d62");
		});

	
		$("#close").mouseout(function(){
		$("#close").css("backgroundColor", "#fdd365");
		});
});