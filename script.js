$(document).ready(function(){
	$("#shah-nav li").click(function(){
		$(".shah-arrow-down").css({'display':'none'});
		$("#shah-nav li").removeClass("active-nav");
		//$("#preview-image").attr('src',"images/preview-images/"+this.id.replace("nav-","")+".png");
		$("#shah-preview-image").attr('src',$("#shah-preview-image").attr("src").replace(/[a-z]+\.png$/,this.id.replace("shah-nav-","")+".png"));
		$(this).addClass("active-nav");
		console.log("#"+this.id+" .arrow-down");
		$("#"+this.id+" .arrow-down").css({'display':'block'});
	});
});
