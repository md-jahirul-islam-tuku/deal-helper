document.getElementById('btn-withdraw').addEventListener('click', function (event) {
  const accountNumber = document.getElementById('cash-out-agent-number').value;
  const pinNumber = document.getElementById('cash-out-pin-number').value;
  const addMoneyAmount = document.getElementById('cash-out-amount').value;
  const convertedAddAmount = parseInt(addMoneyAmount)
  let totalAmount = document.getElementById('total-amount').innerText;
  let convertedTotalAmount = parseInt(totalAmount)
  event.preventDefault();
  if (accountNumber.length === 11) {
    if (pinNumber.length === 4) {
      const sum = convertedTotalAmount - convertedAddAmount;
      document.getElementById('total-amount').innerText = sum;
    }
    else {
      alert('Invalid PIN');
    }
  }
  else {
    alert('Invalid A/C no')
  }
})