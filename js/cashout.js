document.getElementById('button-cashout-money')
    .addEventListener('click', function (event) {
        event.preventDefault()
        console.log('cashout button click')
        const cashout = document.getElementById('input-cash-out').value;
        const cashOutNumber=parseInt(cashout)
        const pinNumber = document.getElementById('cash-out-pin').value;
        console.log(cashout, pinNumber)
        if (pinNumber === '12345') {
            const balance = document.getElementById('account-balance').
                innerText;
            const balanceNumber = parseFloat(balance);

            // reduce the balance
            const newBalance = balanceNumber - cashOutNumber;

            // update the ui 
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('failed to cash out.please try again later')
        }
        document.getElementById('input-cash-out').value = '';
        document.getElementById('cash-out-pin').value = '';
    }
    
)