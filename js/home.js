//add money to the account
//step-1---->>add  event handler
// step-2:get money to be added to the account balance
// get the pin number
// verify pin number


//  step-1:add an event handler to the add money button inside the form
document.getElementById('button-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault()
    // step-2:get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)
    const pinCode = document.getElementById('pin-code').value;
    console.log(pinCode)
    // step-3:verify pin number
    // wrong way to validate pin number
    if (pinCode === '12345') {
        console.log('adding money to your account');
        // step-4:get the current Balance
        const accountBalance = document.getElementById('account-balance').innerText;
        console.log(typeof accountBalance)
        // step-5:add moenyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(accountBalance);
        console.log(typeof balanceNumber)
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance)
        // update the balance in ui/dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money! Please try again')
    }

})