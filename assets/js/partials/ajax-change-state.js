import AWN from "awesome-notifications";

let options = {
    position: "bottom-right",
    icons: {
        enabled: false
    },
	maxNotifications: 1,
};


$(document).ready(function() {
	$('#btn_status').on('click', function(e) {
		e.preventDefault();
		let stats = [];
		let verified = 'VERIFIED';
		let pending = 'PENDING';
		let ongoing = 'ONGOING';
		$('input[type="checkbox"]:checked').each(function(page) {
			let ids = [];
			let $this = $(this);
			let status_value = $this.parent().siblings('td').eq(2).text();
			stats.push(status_value);
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
						// console.log(response);
					},
				});
			}
		});
	
		if(stats.includes(pending || ongoing)){
			new AWN().success('Order has been verified', options);
		}
		if(stats.includes(verified) && !stats.includes(pending || ongoing)){
			new AWN().warning('Chosen order is paid', options);
		}
		if(stats.length == 0){
			new AWN().warning('You didn not choose the order', options);
		}
	});
});