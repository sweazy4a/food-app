$(document).ready(function() {
	function initDateConfig() {
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
				"language": {
					"info": "",
				},
				"bPaginate": false, //hide pagination
				"bFilter": true, //hide Search bar
				"bInfo": false, // hide showing entr
				stateSave: false,
				"bDestroy": true,
				columnDefs: [{
						target: 11,
						visible: false,
						searchable: true,
					},
					{
						target: 0,
						'orderable': false,
					},
					{
						target: 10,
						'orderable': false,
					}

				],



			});

			// Refilter the table
			$('#min, #max').on('change', function() {
				table.draw();
			});

			/* Search */

			$('#myInputTextField').keyup(function() {
				table.search($(this).val()).draw();
			})

			function filterColumn(value) {
				table.column(3).search(value).draw();
			}

			$('.btn_status-filter').on('click', function() {
				let value = $(this).attr("status-filter");
				console.log('value', value);
				filterColumn(value);
			})


			$('.btn_all').on('click', function() {
				$('#table').DataTable().columns('').search('').draw();
			})


			$('.btn-menu').on('click', function() {
				$('.invoice-row--menu ul li').removeClass('active-item');
				$(this).addClass('active-item');
			})
	
			$("#parent").click(function() {
					$(".child").prop("checked", this.checked);
				});

				$('.child').click(function() {
					if ($('.child:checked').length == $('.child').length) {
						$('#parent').prop('checked', true);
					} else {
						$('#parent').prop('checked', false);
					}
				});
	
		}, 1400);
	}

	initDateConfig();

	$("body").delegate(".invoice_container .invoice-universal-pagination li.active", "click", function() {
		initDateConfig();
	});



});