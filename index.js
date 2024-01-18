// javascript

let pagerDisplay = document.getElementById('pager-display');
let phoneDisplay = document.getElementById('phone-display');
let resetBtn = document.getElementById('reset');
const sendBtn = document.getElementById('send');


const buttons = document.querySelectorAll('.phone-button');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const totalNumbers = 0
        let number = e.target.getAttribute('data-number');
        if(phoneDisplay.innerHTML.length <= 9){
            phoneDisplay.innerHTML += number
        } else {
            reset()
        }
        })
    })

resetBtn.addEventListener('click', reset);

function reset() {
    pagerDisplay.innerHTML = '';
    phoneDisplay.innerHTML = '';
}



send.addEventListener('click', () => {
    setTimeout(() => {
        pagerDisplay.innerHTML = `${phoneDisplay.innerHTML} <audio src="assets/pager.wav" autoplay></audio>`;
        phoneDisplay.innerHTML = '';
    }, 1500);
})

