const date = document.getElementById('date');
let timeDay = document.getElementById('timeDay');
let timeHour = document.getElementById('timeHour');
let timeMinute = document.getElementById('timeMinute');
let timeSecond = document.getElementById('timeSecond');

document.getElementById('start').addEventListener("click", function () {
    function countDown() {
        const instant = new Date();
        const newDate = new Date(date.value).getTime();

        const difference = newDate - instant;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        timeDay.innerHTML = days.toString();
        const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        timeHour.innerHTML = hours.toString();
        const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 *60));
        timeMinute.innerHTML = minutes.toString();
        const seconds = Math.floor(difference % (1000 *60) / 1000);
        timeSecond.innerHTML = seconds.toString();

        const countDownInterval = setInterval(function () {
            countDown();
        }, 1000)

        document.getElementById('stop').addEventListener("click", function () {
            clearInterval(countDownInterval);
            timeDay.innerHTML = '00';
            timeHour.innerHTML = '00';
            timeMinute.innerHTML = '00';
            timeSecond.innerHTML = '00';
        })
    }
    return countDown();
})







