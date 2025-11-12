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
    document.getElementById('btn-logout').addEventListener('click', function() {
      window.location.href = './index.html'
    })
// add money toggle
    document.getElementById('latest-payment').addEventListener('click', function () {
      document.getElementById('add-money-section').style.display='block';

    })
// cash out toggle