/**
 * 1.add event listener to the add money 
 * 2.make sure to preventdefault so that page dosen't reload 
 * 3.get the money user wants to add aslo, get the pin number provided
 * 4.verify the pin number.for,wrong pin number ==>failed  to add for 
 * right pin number ,allow to add the number to the account balance
 * 
 * 5.get the current balance 
 * 6.add money to the added with the current balance
 * 7.display/update the balance in the ui/dom
 */

document.getElementById('button-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // console.log('added the event handler')
        
        // get money and the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber=parseFloat(addMoney)
        const pinNumber = document.getElementById('pin-code').value;
        // console.log(addMoney, pinNumber)
        if (pinNumber === '12345') {
            //add money to the account
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            // new balance
            const newBalance = balanceNumber + addMoneyNumber;
            // update the dom with updated balance
            document.getElementById('account-balance')
                .innerText = newBalance;
        }
        else {
            alert('Failed to add moeny.please try  again later')
        }
    });