/*****************************************************************
 *
 * flashLightBoxInjector 1.2 - by Bramus! - http://www.bram.us/
 *
 * v 1.2 - 2007.11.22 - Added prependElement function, and provided new Example
 * v 1.1 - 2007.08.03 - [fix] Array passed into flashLightBoxInjector appeared reversed in Lightbox2
 * v 1.0 - 2007.07.27 - initial release
 *
 * Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
 *
 *****************************************************************/

	var flashLightBoxInjector = Class.create();
	
	flashLightBoxInjector.prototype = {
		
		initialize : function() {
			var objBody = document.getElementsByTagName("body").item(0);
			var objContainer = document.createElement("div");
			objContainer.setAttribute('id','flashLightBoxInjectionBox');
			objContainer.style.display = 'none';
			objBody.appendChild(objContainer);		
		},
		
		reset : function() {
			$('flashLightBoxInjectionBox').innerHTML = "";
		},
		
		appendElement : function(link, title, id, setId) {
			new Insertion.Bottom('flashLightBoxInjectionBox', '<a href="' + link + '" title="' + title + '" id="' + id + '" rel="lightbox[' + setId + ']">' + link + '</a>');
		},
		
		prependElement : function(link, title, id, setId) {
			new Insertion.Top('flashLightBoxInjectionBox', '<a href="' + link + '" title="' + title + '" id="' + id + '" rel="lightbox[' + setId + ']">' + link + '</a>');
		},
		
		updateImageList : function() {
			myLightbox.updateImageList();	
		},
		
		start	: function(id) {
			myLightbox.start($(id));
		}
		
	}
	
	function initFlashLightBoxInjector() { myFlashLightBoxInjector = new flashLightBoxInjector(); }
	Event.observe(window, 'load', initFlashLightBoxInjector, false);