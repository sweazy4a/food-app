
$(document).ready(function() {
    $('#btn_status').on('click', function(e) {
    
        $('input[type="checkbox"]').each(function (page) {
            let ids = [];
            $this = $(this);
            let verified = 'VERIFIED';
            let status_value = $this.parent().siblings('td').eq(2).text();
            let val = $(this).closest("tr").attr("data-id");
            ids.push(val);
    
            if(status_value !== verified){
                
                $this.parent().siblings('td').eq(2).html('<div class="status-VERIFIED">' + verified + '</div>');
                $.ajax({
                url: invoice.ajaxUrl,
                type: "POST",
                data: {
                    post_details: ids,
                    page: page,
                    action: "ChangeStatus", 
                },
                error: function (error) {
                    // new AWN().alert().", options);
                },
                success: function (response) {
                    console.log(response);
    
                    },
                });
            }
        
            });
        });
    });