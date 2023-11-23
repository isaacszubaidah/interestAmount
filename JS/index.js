document.getElementById('calculateInterest').addEventListener('click', function () {
  calculateInterest();
});

function calculateInterest() {
  let principal = parseFloat(document.getElementById('principal').value);
  let rate = parseFloat(document.getElementById('rate').value);
  let time = parseFloat(document.getElementById('time').value);

  // Check if the inputs are valid numbers
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert('Please enter valid numbers for all fields.');
      return;
  }

  // Formula for interest:
  let interest = (principal * rate * time) / 100;

  // result: 
  document.getElementById('result').innerHTML = 'Interest Amount: ' + interest.toFixed(2) + '%';
}