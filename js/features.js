// show the cashout form
document.getElementById('show-cash-out')
    .addEventListener('click', function () {
        // show cashout button clicked
        console.log('show cashout button clicked')
        document.getElementById('cash-out-form').classList.remove('hidden');
        document.getElementById('add-money-form').classList.add('hidden');

        // hide the addomeny form
    })
document.getElementById('btn-add-money')
    .addEventListener('click', function () {
        // show cashout button clicked
        console.log('show cashout button clicked')
        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('add-money-form').classList.remove('hidden');

        // hide the addomeny form
    })