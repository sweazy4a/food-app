$(document).ready(function() {
	setTimeout(function() {
		var minDate, maxDate;

		$.fn.dataTable.ext.search.push(
			function(settings, data, dataIndex) {
				var min = minDate.val();
				var max = maxDate.val();
				// console.log('DATA', data);
				var date = new Date(data[11]);

				if (
					(min === null && max === null) ||
					(min === null && date <= max) ||
					(min <= date && max === null) ||
					(min <= date && date <= max)
				) {
					return true;
				}
				return false;
			}
		);

		// Create date inputs
		minDate = new DateTime($('#min'), {
			format: 'DD/MM/YYYY'
		});
		maxDate = new DateTime($('#max'), {
			format: 'DD/MM/YYYY'
		});

		// DataTables initialisation
		var table = $('#table').DataTable({
			stateSave: true,
			"bDestroy": true,
			columnDefs: [{
				target: 11,
				visible: false,
				searchable: true,
			}],
		});

		// Refilter the table
		$('#min, #max').on('change', function() {
			table.draw();
		});

        /* Search */

		$('#myInputTextField').keyup(function() {
			table.search($(this).val()).draw();
		})

	}, 2000);

});