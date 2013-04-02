$(document).ready(function(){
	$("#nav li").click(function(){
		$(".arrow-down").css({'display':'none'});
		$("#nav li").removeClass("active-nav");
		//$("#preview-image").attr('src',"images/preview-images/"+this.id.replace("nav-","")+".png");
		$("#preview-image").attr('src',$("#preview-image").attr("src").replace(/[a-z]+\.png$/,this.id.replace("nav-","")+".png"));
		$(this).addClass("active-nav");
		console.log("#"+this.id+" .arrow-down");
		$("#"+this.id+" .arrow-down").css({'display':'block'});
	});
});
