//customized

/*google Analystic*/


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-17447953-1']);
  _gaq.push(['_setDomainName', '.gldmh.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 
 


  
$.preLoadImages = function(){			

	var imgList =['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','fitnessandsport-thumb.jpg','totalArc-thumb.jpg','union-thumb.jpg','bio-thumb.jpg','zedu-thumb.jpg','liping-thumb.jpg'];
	
	$.each(imgList,function(i){
		imgList[i]= new Image();
		imgList[i].src = "images/"+this;
	});
}





$(document).ready(function(){	


	$.preLoadImages();

/* This is basic - uses default settings */
	
	$("#contact").hover(
	function(){		
		$(this).animate({"opacity":"1"},"slow")
	},function(){
			$(this).animate({"opacity":".8"},"slow")
	});
		
		
		
	
	  var path = location.pathname;
	   if (path)
	   $('.navLink a[href="' + path + '"]').attr('class', 'active');
	   
	
     //Sliding Boxes and Captions
     //To switch directions up/down and left/right just place a "-" in front of the top/left attribute  
     //Vertical Sliding  
     $('.list.slidedown').hover(function(){  
         $(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});  
     }, function() {  
         $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});  
     });  
     //Horizontal Sliding  
     $('.list.slideright').hover(function(){  
         $(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});  
     }, function() {  
         $(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});  
     });  
     //Diagnal Sliding  
     $('.list.thecombo').hover(function(){  
         $(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});  
     }, function() {  
         $(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});  
     }); 
     //Partial Sliding (Only show some of background)  
     $('.list.peek').hover(function(){  
         $(".cover", this).stop().animate({top:'90px'},{queue:false,duration:160});  
     }, function() {  
         $(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});  
     });  
     //Full Caption Sliding (Hidden to Visible)  
     $('.list.captionfull').hover(function(){  
         $(".cover", this).stop().animate({top:'250px'},{queue:false,duration:160});  
     }, function() {  
         $(".cover", this).stop().animate({top:'300px'},{queue:false,duration:160});  
     });  
    //Caption Sliding (Partially Hidden to Visible)  
     $('.list.caption').hover(function(){  
         $(".cover", this).stop().animate({top:'250px'},{queue:false,duration:160});  
     }, function() {  
         $(".cover", this).stop().animate({top:'300px'},{queue:false,duration:160});  
     });  

	$('#quick-links').click(function(){
	
		$('#quick-links-menu').toggle("slide",{"direction":"up"},500)
		
		});
		
	$(".description").css("opacity","0.8");	
	
	$("#about_content").delay("slow").animate({"height":"1300px"},2000,function(){
		$(this).css("opacity","0.8")
	});
	
	$("#about_content").hover(function(){
		$(this).css({"opacity":"1"})
	},function(){	
		$(this).animate({"opacity":"0.8"},"slow")
	})
		
	$('#footwrapper').mouseover(function(){
		$('#footwrapper').animate({bottom:'0'},60);
	}).mouseleave(function(){
		$('#footwrapper').animate({bottom:'-25px'},60);
	});
		
	
	if ($.browser.msie){
		$("body").css("background","#333 url(../images/bg"+Math.ceil(Math.random()*4)+".jpg) repeat left top fixed").fadeIn();
	}else{
		$("body").css({"background":"#333 url(../images/bg"+Math.ceil(Math.random()*4)+".jpg) no-repeat center center fixed","background-size": "cover"}).fadeIn();
	};
	

	function validateEmail(){
		
		var _email = $('input[name="email"]').val();
		var _subject =$('input[name="subject"]').val();
		var _name = $('input[name="name"]').val();
		var _message = $('textarea[name="message"]').val();
		
		if( _email == "" || _subject == "" || _name == "" || _message == ""){
			$(".btSend").attr("disabled","disabled");
		}
		else {
			$(".btSend").removeAttr("disabled");
			}
		
	}
	
	
	$('.listWrapper').each(function(index, element) {
	   $(this).delay("slow").fadeIn("slow");
    });
	
	$("#emailSendForm .content").keyup(function(){
		validateEmail();
	});
	
	$("#contact").show().animate({"left":($(window).width()-$(this).width())/2},"slow",function(){
		$(this).animate({"opacity":".8"},"slow")
	});
	
	
	$(".btReset").click(function(){
		$(".btSend").attr("disabled","disabled");
		$(".content").val("");
	})
	
	
	validateEmail();
		
	
	$(".btSend").click(function(){
		
		var _email = $('input[name="email"]').val();
		var _subject =$('input[name="subject"]').val();
		var _name = $('input[name="name"]').val();
		var _message = $('textarea[name="message"]').val();
						
		$.post(
			
				"send_email.php",
				
				{
					email:_email,
					subject:_subject,
					name:_name,
					message:_message				
				},
				
				function(data){	
					$("#bottomContent").html(data.message);
				},
			
			"json"
			
			)
		
		});
	
})