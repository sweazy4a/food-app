$(document).ready(function() {
	let ajaxurl = invoice.ajaxUrl;
    function invoice_load_all_posts(page){
        // Start the transition
        $(".invoice_load").fadeIn().css('background','#ccc');

        var data = {
            page: page,
            action: "LoadInvoices"
        };

        // Send the data
        $.post(ajaxurl, data, function(response) {
            $(".invoice_container").empty().append(response);
            $(".invoice_load").css({'background':'none', 'transition':'all 1s ease-out'});
        });
    }

    // Load page 1 as the default
    invoice_load_all_posts(1);

    $("body").delegate(".invoice_container .invoice-universal-pagination li.active", "click", function(){
        var page = $(this).attr('p');
        invoice_load_all_posts(page);
    });

});