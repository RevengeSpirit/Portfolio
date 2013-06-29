//customized

/*google Analystic*/

(function($){

    $.fn.thumberHover = function(options){

        var settings = {

           direction: "slideUp"

        };

        options = $.extend(settings,options);

        return this.each(function(){

            if(options.direction){

                var $this = $(this);

                var thumbs = $this.find(".list");

                if(options.direction == "slideUp"){

                    thumbs.hover(function(){
                        $(this).find(".cover").animate({bottom:'0'},300);
                    }, function() {
                        $(this).find(".cover").animate({bottom:'-50px'},300);
                    });

                }


            }


        })

    }


    $.fn.showLocationLinks = function(){

       return this.filter("a").each(function(){
           $(this).append("(" + $(this).attr("href") + ")");
       })

    }


    //active link when the page been loaded

    $.fn.linkActived = function(){

              var path =  window.location.pathname ;

              var urlPref = "/portfolio/";

              this.find("a").each(function(){

                  if (( urlPref + $(this).attr("href")) === path)
                  {
                      $(this).addClass("active");
                    }
              });

        return this;

    }








})(jQuery);


$(document).ready(function(){

    $(".navLink").linkActived();

    $(".listWrapper").thumberHover();


    /* This is basic - uses default settings */
	

	$('#quick-links').click(function(){

		    $('#quick-links-menu').slideToggle(500);

		});
	
	$("#about_content").animate({"height":"1000px"},2000,function(){

        $(this).animate({"opacity":"0.8"},"slow")

        $(this).hover(function(){
            $(this).css({"opacity":"1"})
        },function(){
            $(this).css({"opacity":"0.8"})
        })

	});
	

		
	$('#footwrapper').hover(function(){
		$('#footwrapper').animate({bottom:'0'},60);
	},function(){
		$('#footwrapper').animate({bottom:'-25px'},60);
	});
	
	
	$('.list').each(function() {
	   $(this).delay("slow").fadeIn("slow");
    });

	$("#contact").show().animate(
        {left:($(window).width()- $("#contact").width())/2+"px"},"slow",function(){
                $(this).animate({"opacity":".8"},"slow")
        }).hover(
                function(){
                    $(this).css({"opacity":"1"})
                },function(){
                    $(this).css({"opacity":".8"})
                });



    $("body").css({"background":"#333 url(imgs/bg"+Math.ceil(Math.random()*4)+".jpg) no-repeat center center fixed","background-size": "cover"}).fadeIn();


		
	
	$(".button-send").click(function(e){

        e.preventDefault();
		
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