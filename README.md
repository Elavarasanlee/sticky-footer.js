sticky-footer.js v1.0
================

###Plugin to fix the sticky footer issue using jQuery on the fly.###

###What is Sticky Footer?###
The Footer of a webpage that stays at bottom of the page even when there�s not much of main content.
	
###Can't this be fixed using CSS?###
Yes it can be. And the solution is here: http://css-tricks.com/snippets/css/sticky-footer/
	
###Then why use jQuery?###
1. CSS Solution didn't work out for me.
2. Wanted to solve this issue on the fly for all screen sizes. So the best option was to use jQuery.

###Browser Compatibility?###
Not checked completely. But wokrs in the following browsers.
* Google Chrome.
* Firefox 3.5+
* Opera 12+
* IE 9+

###How to use?###
* Download sticky_footer.js file.
* Create a HTML page with body contents as follows:

		<body>
			<div id="header">
				Header Content.
				<!-- Site logo, Menu or Header Banner. -->
			</div>
			<div id="content">
				Main Content.
				<!-- The main content of the current page. -->
			</div>
			<div id="footer">
				Footer Content.
				<!-- Footer links or copyright info. -->
			</div>
		</body>
		
===or===
		
		<body>
			<div id="pagewrap">
				<header id="header">
					Header Content.
					<!-- Site logo, Menu or Header Banner. -->
				</header>
				<div id="content">
					<article class="post">
						Main Content.
						<!-- The main content of the current page. -->
					</article>
				</div>
				<aside id="sidebar">
					<section class="widget">
						<!-- Your awesome widget which sits on the right or left side of your page depending upon you styling. -->
					</section>
				</aside>
				<footer id="footer">
					Footer Content.
					<!-- Footer links or copyright info. -->
				</footer>
			</div>
		</body>

* Add the following scripts within head tag or below body tag.
	
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script type="text/javascript" src="path_to/sticky_footer.js"></script>
		<script type="text/javascript">
			(function($, window, document) {
			//For demo purpose I've used only 3 top level containers: header,main and footer, Which is very common practise. 
			//But this may vary according to your site design. In that case you might have to modify the library according to your use.
			 $(function() { //On document ready.
				 var $header_id = $("#header"),
					 $main_id = $("#main"),
					 $footer_id = $("#footer");  //All id's of top level containers.
				 if($header_id.length>0 && $footer_id.length>0 && $main_id.length>0)
				 {
					$(document).sticky_footer($header_id,$footer_id,$main_id);
					$(window).resize(function(){
						$(document).sticky_footer($header_id,$footer_id,$main_id); //Bind sticky footer function with window.resize method
					});
				 }
			 });
			}(window.jQuery, window, document));
		</script>

###Can I see the Demo?###
Sure. http://elavarasanlee.in/demos/sticky_footer
	
###Contributing###
If you wish to contribute to improve the plugin, please send pull requests to the "development" branch with clear commit message. Before making any changes, make sure to run the tests to create the baseline results. If some error occurs in supported browser list, please create appropriate tests for it as well before submitting any code changes.
