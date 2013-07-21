<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
//Screen_height = Header_height + Main_Content_height + Footer_height + alltoplvlContainersMarginTop_Bottom + alltoplvlContainersPaddingTop_Bottom
//Function Declaration
function sum_of_top_bottom_props(id) {
    var elem_id = $(id);
    if(elem_id.length>0) {
    //If id exists in the page, fetch the sum of float values of padding-top,bottom margin-top,bottom, border-top,bottom-width.
        var prop_padding = parseFloat(elem_id.css('padding-top'))+parseFloat(elem_id.css('padding-bottom')),
            prop_margin = parseFloat(elem_id.css('margin-top'))+parseFloat(elem_id.css('margin-bottom')),
            prop_border = parseFloat(elem_id.css('border-top-width'))+parseFloat(elem_id.css('border-bottom-width'));
        return prop_padding+prop_margin+prop_border;
    } else{ //Id id soesnot exist return 0;
        alert("The id: "+id+" doesn't exists! Pleas enter a valid id.");
        return 0;
    }
}
function sticky_footer() {
    var header = $(header_id), footer = $(footer_id), content = $(main_id);
    var screen_height = $(window).height(), //Total height of the screen which is rendered within a browser window without having to scroll-down.
        header_height = (header.length>0) ? header.height():0, footer_height = (footer.length>0) ? footer.height():0,
        header_props = sum_of_top_bottom_props(header_id), footer_props = sum_of_top_bottom_props(footer_id),
        main_props = sum_of_top_bottom_props(main_id),
        main_height = screen_height-(header_height + footer_height + header_props + main_props + footer_props)-32;
    if(content.length>0)
        content.css('min-height',main_height);
    else
        alert("There is no element existing in your page with id = "+main_id);
}	
</script>
<script type="text/javascript">
//For demo purpose I've used only 3 top level containers: header,main and footer, Which is very common practise. But this may vary.
var header_id = "#header", footer_id = "#footer", main_id = "#main"; //All id's of top level containers. 
$(document).ready(sticky_footer); //Once the document is ready call the function sticky_footer().
</script>