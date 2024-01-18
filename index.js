// javascript

let pagerDisplay = document.getElementById('pager-display');
let phoneDisplay = document.getElementById('phone-display');
let resetBtn = document.getElementById('reset');
const sendBtn = document.getElementById('send');


const buttons = document.querySelectorAll('.phone-button');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const totalNumbers = 0
        if(totalNumbers <= 10){
            let number = e.target.getAttribute('data-number');
            phoneDisplay.innerHTML += number
        } else {
            reset()
        }
        console.log(totalNumbers)
        })
    })

resetBtn.addEventListener('click', reset);

function reset() {
    pagerDisplay.innerHTML = '';
    phoneDisplay.innerHTML = '';
}



send.addEventListener('click', () => {
    setTimeout(() => {
        pagerDisplay.innerHTML = phoneDisplay.innerHTML;
        phoneDisplay.innerHTML = '';
    }, 1500);
})

