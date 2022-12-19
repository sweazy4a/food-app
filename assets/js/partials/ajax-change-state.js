import AWN from "awesome-notifications";

let options = {
    position: "bottom-right",
    icons: {
        enabled: true
    },
	maxNotifications: 1,
};


$(document).ready(function() {
	$('#btn_status').on('click', function(e) {
		$('input[type="checkbox"]:checked').each(function(page) {
			let ids = [];
			let $this = $(this);
			let verified = 'VERIFIED';
			let status_value = $this.parent().siblings('td').eq(2).text();
			let val = $(this).closest("tr").attr("data-id");
			ids.push(val);

			if (status_value !== verified) {

				$this.parent().siblings('td').eq(2).html('<div class="status-VERIFIED">' + verified + '</div>');
				$.ajax({
					url: invoice.ajaxUrl,
					type: "POST",
					data: {
						post_details: ids,
						page: page,
						action: "ChangeStatus",
					},
					error: function(error) {
						new AWN().alert('Sorry something went wrong', options);
					},
					success: function(response) {
						new AWN().success('Order has been verified', options);
					},
				});
			}
			else{
				new AWN().warning('Chosen order already paid', options);
			}
		});
	});
});