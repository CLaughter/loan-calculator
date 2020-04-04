// Listen for results
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results after onclick calculate, even though it's initially set to hide
  document.getElementById("results").style.display = "none";
  // Show loading spinner
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Calculate results
function calculateResults() {
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  // Get principal value in decimal
  const principal = parseFloat(amount.value);
  // Get calculated interest
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  // Get calculated payments in number of months
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    // Hide loading spinner
    document.getElementById("loading").style.display = "none";
    // Show results
    document.getElementById("results").style.display = "block";

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    showError("Please check your numbers");
  }
}
// Show error
function showError(err) {
  // Hide loading spinner
  document.getElementById("loading").style.display = "none";
  // Hide results
  document.getElementById("results").style.display = "none";

  // Create div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node, append to div
  errorDiv.appendChild(document.createTextNode(err));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
