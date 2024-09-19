//add money to the account
//step-1---->>add  event handler
// step-2:get money to be added to the account balance


//  step-1:add an event handler to the add money button inside the form
document.getElementById('button-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault()
    // step-2:get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput)
    const pinCode = document.getElementById('pin-code').value;
    console.log(pinCode)
})