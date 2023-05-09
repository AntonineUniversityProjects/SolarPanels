// get the quantity input element
function updatePrice(){
const quantityInput = document.querySelector('input[name="quantity"]');

// add event listener to the quantity input
quantityInput.addEventListener('input', () => {
  // get the selected checkbox value
  const selectedCheckbox = document.querySelector('input[name="product_name"]:checked').value;

  // calculate the price based on the selected checkbox and the quantity entered
  let price = 0;
  if (selectedCheckbox === 'option1') {
    price = 10;
  } else if (selectedCheckbox === 'option2') {
    price = 20;
  } else if (selectedCheckbox === 'option3') {
    price = 30;
  }
  price *= quantityInput.value;

  // update the price input value with the calculated price
  const priceInput = document.querySelector('input[name="Price"]');
  priceInput.value = price;
});
}
