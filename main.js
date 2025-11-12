// current time display
function displayCurrentTime() {
  const now = new Date();
  const options = {
    hour: '2-digit', minute: '2-digit',
    second: '2-digit',
    hour12: true
  };
  const timeString = now.toLocaleTimeString('en-US', options);
  document.getElementById('currentTime').textContent = timeString;
}
displayCurrentTime();
setInterval(displayCurrentTime, 1000);
// logout btn
document.getElementById('btn-logout').addEventListener('click', function () {
  window.location.href = './index.html'
})
// add money toggle
document.getElementById('add-money').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'block';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-history-section').style.display = 'none';
  document.getElementById('get-bonus').classList.remove('border-purple-500');
  document.getElementById('add-money').classList.add('border-purple-500');
  document.getElementById('cash-out').classList.remove('border-purple-500');
  document.getElementById('transfer-money').classList.remove('border-purple-500');
  document.getElementById('pay-bill').classList.remove('border-purple-500');
  document.getElementById('transaction-history').classList.remove('border-purple-500');
})
// cash out toggle
document.getElementById('cash-out').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'block';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-history-section').style.display = 'none';
  document.getElementById('get-bonus').classList.remove('border-purple-500');
  document.getElementById('add-money').classList.remove('border-purple-500');
  document.getElementById('cash-out').classList.add('border-purple-500');
  document.getElementById('transfer-money').classList.remove('border-purple-500');
  document.getElementById('pay-bill').classList.remove('border-purple-500');
  document.getElementById('transaction-history').classList.remove('border-purple-500');
})
// transfer money toggle
document.getElementById('transfer-money').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'block';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-history-section').style.display = 'none';
  document.getElementById('get-bonus').classList.remove('border-purple-500');
  document.getElementById('add-money').classList.remove('border-purple-500');
  document.getElementById('cash-out').classList.remove('border-purple-500');
  document.getElementById('transfer-money').classList.add('border-purple-500');
  document.getElementById('pay-bill').classList.remove('border-purple-500');
  document.getElementById('transaction-history').classList.remove('border-purple-500');
})
// get bonus toggle
document.getElementById('get-bonus').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'block';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-history-section').style.display = 'none';
  document.getElementById('get-bonus').classList.add('border-purple-500');
  document.getElementById('add-money').classList.remove('border-purple-500');
  document.getElementById('cash-out').classList.remove('border-purple-500');
  document.getElementById('transfer-money').classList.remove('border-purple-500');
  document.getElementById('pay-bill').classList.remove('border-purple-500');
  document.getElementById('transaction-history').classList.remove('border-purple-500');
})
// pay bill toggle
document.getElementById('pay-bill').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'block';
  document.getElementById('transaction-history-section').style.display = 'none';
  document.getElementById('pay-bill').classList.add('border-purple-500');
  document.getElementById('add-money').classList.remove('border-purple-500');
  document.getElementById('cash-out').classList.remove('border-purple-500');
  document.getElementById('transfer-money').classList.remove('border-purple-500');
  document.getElementById('get-bonus').classList.remove('border-purple-500');
  document.getElementById('transaction-history').classList.remove('border-purple-500');
})
// transaction toggle
document.getElementById('transaction-history').addEventListener('click', function () {
  document.getElementById('latest-payment-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('get-bonus-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transaction-history-section').style.display = 'block';
  document.getElementById('transaction-history').classList.add('border-purple-500');
  document.getElementById('add-money').classList.remove('border-purple-500');
  document.getElementById('cash-out').classList.remove('border-purple-500');
  document.getElementById('transfer-money').classList.remove('border-purple-500');
  document.getElementById('get-bonus').classList.remove('border-purple-500');
  document.getElementById('pay-bill').classList.remove('border-purple-500');
})