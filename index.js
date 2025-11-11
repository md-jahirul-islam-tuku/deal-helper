document.getElementById('btn-login').addEventListener('click', function (event) {
  const accountNumber = document.getElementById('account-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  event.preventDefault();
  if (accountNumber.length === 11) {
    if (pinNumber.length === 4) {
      window.location.href = './main.html'
    }
    else {
      alert('Invalid PIN');
    }
  }
  else {
    alert('Invalid A/C no')
  }
})

