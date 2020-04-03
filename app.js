// Listen for results
document
  .getElementById("Loan-form")
  .addEventListener("submit", calculateResults);

// Calculate results
function calculateResults(e) {
  console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculate = parseFloat(Interest.value) / 100 / 12;
  e.preventDefault();
}
