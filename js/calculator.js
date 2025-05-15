function calculateAverage() {
  const prices = document.querySelectorAll("input[name='price[]']");
  const quantities = document.querySelectorAll("input[name='quantity[]']");
  let totalAmount = 0, totalShares = 0;

  prices.forEach((priceInput, i) => {
    const price = parseFloat(priceInput.value) || 0;
    const qty = parseFloat(quantities[i].value) || 0;
    totalAmount += price * qty;
    totalShares += qty;
  });

  const average = totalShares ? (totalAmount / totalShares).toFixed(2) : 0;
  document.getElementById("total-shares").textContent = totalShares;
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  document.getElementById("average-price").textContent = average;
}
