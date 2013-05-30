window.addEvent('domready', function(){

 var status = {
 'true': 'open',
 'false': 'close'
 };
 
 var descr = new Fx.Slide('descrdetails').hide();
 var perf = new Fx.Slide('perfdetails').hide();
 var news = new Fx.Slide('newsdetails').hide();
 var adwards = new Fx.Slide('adwardsdetails').hide();



$('descr').addEvent('click', function(e){
 e = new Event(e);
 descr.toggle();
 e.stop();
 });


$('perf').addEvent('click', function(e){
 e = new Event(e);
 perf.toggle();
 e.stop();
 });


 $('news').addEvent('click', function(e){
 e = new Event(e);
 news.toggle();
 e.stop();
 });

 
 $('adwards').addEvent('click', function(e){
 e = new Event(e);
 adwards.toggle();
 e.stop();
 });
 
/* $('toggle2').addEvent('click', function(e){
 e = new Event(e);
 mySlide2.toggle();
 e.stop();
 });*/

 }); 