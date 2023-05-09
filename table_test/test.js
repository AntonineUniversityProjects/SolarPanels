function showSelectedOptions() {
  
    var selectedOptions ;
    if (document.querySelector('input[name="product_name"]:checked')) {
      selectedOptions=document.querySelector('input[name="product_name"]:checked').value;
      
     var quantity= document.getElementById("quantity").value;
     
     if(selectedOptions=="solar panel"){
     alert(quantity+" " +selectedOptions+" of price: "+(180*quantity)+" $");
     }else if(selectedOptions=="battery"){
        alert(quantity+" " +selectedOptions+" of price: "+(500*quantity)+" $");
     }else if(selectedOptions=="inverter"){
        alert(quantity+" " +selectedOptions+" of price: "+(400*quantity)+" $"); 
     }
    }
    else{
        alert("please check any value");
    }
   
  }
  $(document).ready(function() {
	// Add row button click event
	$('#add-row').on('click', function() {
		// Append new row to the table
		$('#myTable tbody').append('<tr><td><input type="checkbox" name="product_name" value="solar panel">solar panel<br><input type="checkbox" name="product_name" value="battery"> battery<br><input type="checkbox" name="product_name" value="inverter">inverter<br> </td><td><input type="number" name="quantity"id ="quantity"></td><td><button class="delete-row">Delete</button></td></tr>');
	});

	// Delete row button click event
	$('#myTable').on('click', '.delete-row', function() {
		// Remove the row from the table
		$(this).closest('tr').remove();
	});
});







const buttons = document.querySelectorAll("[#data-carousel-button]");

buttons.forEach(button => {
   button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
         .closest("[data-carousel]")
         .querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
   })
})
