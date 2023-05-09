
$(document).ready(function() {
	// Add row button click event
	$('#add-row').on('click', function() {
		// Append new row to the table
		$('#myTable tbody').append('<tr><td><input type="checkbox" name="product_name" value="option1">solar panel<br><input type="checkbox" name="product_name" value="option2"> battery<br><input type="checkbox" name="product_name" value="option3">inverter<br> </td><td><input type="number" name="price"></td><td><input type="number" name="quantity"></td><td><button class="delete-row">Delete</button></td></tr>');
	});

	// Delete row button click event
	$('#myTable').on('click', '.delete-row', function() {
		// Remove the row from the table
		$(this).closest('tr').remove();
	});
});
