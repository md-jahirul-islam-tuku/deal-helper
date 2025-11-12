document.getElementById('btn-add-money').addEventListener('click', function (event) {
  const accountNumber = document.getElementById('add-money-account-number').value;
  const pinNumber = document.getElementById('add-money-pin-number').value;
  const addMoneyAmount = document.getElementById('add-money-amount').value;
  const convertedAddAmount = parseInt(addMoneyAmount)
  let totalAmount = document.getElementById('total-amount').innerText;
  let convertedTotalAmount = parseInt(totalAmount)
  event.preventDefault();
  if (accountNumber.length === 11) {
    if (pinNumber.length === 4) {
      const sum = convertedTotalAmount + convertedAddAmount;
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