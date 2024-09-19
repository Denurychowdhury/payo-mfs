// console.log('angta lagse')
// search:form submit reloading the page


// step-1 set event handler
// document.getElementById('button-login').addEventListener('click', function (event) {
//     // step-2

//     event.preventDefault();//>>>vejal to biginars
//     // console.log('login button click')

//     // step-3--->>>get the phone number and pin
//     const phoneNumber = document.getElementById('phone-number').value;
//     // console.log(phoneNumber)
//     const pinCode = document.getElementById('pin-code').value;
//     // console.log(pinCode)

//     // step-4:validate the phone and pin
//     // this is not the ultimate way .this is temporary
//     if (phoneNumber === '5'&&pinCode==='1234') {
//         console.log('you are log in')
//         // allow user to use the website
//     }
//     else {
//         alert('wrong phone number or pin')
//     }

// })

document.getElementById('button-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinCode = document.getElementById('pin-code').value;
        // console.log(phoneNumber , pinCode)

        // bad way to validate
        if (phoneNumber === '5' && pinCode === '1234') {
            console.log('You Can youse Website')
            window.location.href = './home.html';
        }
        else {
            alert('wrong phone number or pin')
        }
})