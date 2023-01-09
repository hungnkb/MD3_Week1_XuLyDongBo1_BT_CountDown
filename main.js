let countDown = (inputNumber = +document.getElementById('inputNumber').value) => {
    document.getElementById('countDown').innerHTML = inputNumber;
    while (inputNumber >= 0) {
        if (inputNumber == 0) {
            return document.getElementById('countDownFinished').innerHTML = ' finshed';
        } else {
            return setTimeout(() => {
                countDown(inputNumber - 1);
            }, 1000);
        }
    }
}








