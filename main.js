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
})