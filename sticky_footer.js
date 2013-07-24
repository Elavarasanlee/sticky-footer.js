<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
//Screen_height = Header_height + Main_Content_height + Footer_height + alltoplvlContainersMarginTop_Bottom + alltoplvlContainersPaddingTop_Bottom
function sticky_footer(header,footer,content) {
    if(typeof header != undefined && typeof footer != undefined && typeof content != undefined) {
        var screen_height = $(window).height(); //Total height of the screen which is rendered within a browser window without having to scroll-down.

        var sum_of_top_bottom_props = function(id){ //Returns the sum of float values of padding-top,bottom margin-top,bottom, border-top,bottom-width.
                if(typeof id != undefined){
                    var elem_id = id;
                    if(elem_id.length>0) { //If id exists in the page, fetch the sum of float values of the properties.
                       var prop_padding = parseFloat(elem_id.css('padding-top'))+parseFloat(elem_id.css('padding-bottom')),
                           prop_margin = parseFloat(elem_id.css('margin-top'))+parseFloat(elem_id.css('margin-bottom')),
                           prop_border = parseFloat(elem_id.css('border-top-width'))+parseFloat(elem_id.css('border-bottom-width'));
                       return prop_padding+prop_margin+prop_border;
                   } else{ //If id soesnot exist return 0;
                       console.error("The id: "+id+" doesn't exists! Pleas enter a valid id.");
                       return 0;
                   }
               }},

            header_height = (header.length>0) ? header.height():0, //Height of header
            footer_height = (footer.length>0) ? footer.height():0, //Height of footer
            header_props = sum_of_top_bottom_props(header), //Height of properties that contribute to header's height.
            footer_props = sum_of_top_bottom_props(footer), //Height of properties that contribute to footer's height.
            main_props = sum_of_top_bottom_props(content), //Height of properties that contribute to content's height.
            main_height = screen_height-(header_height + header_props + main_props + footer_props + footer_height);

        if(content!= undefined && content.length>0) { content.css('min-height',main_height); return true; } 
        else return false;
    } 
    else return false;
}
</script>
<script type="text/javascript">
//For demo purpose I've used only 3 top level containers: header,main and footer, Which is very common practise. 
//But this may vary according to your site design.
  (function($, window, document) {
   $(function() { //On document ready initialize id's of containers to corresponding variables.
       var header_id = $("#header"), footer_id = $("#footer"), main_id = $("#content"); //All id's of top level containers.
       if(header_id.length>0 && footer_id.length>0 && main_id.length>0)
            sticky_footer(header_id,footer_id,main_id);
   });
  }(window.jQuery, window, document));
</script>