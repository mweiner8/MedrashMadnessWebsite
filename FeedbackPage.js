const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Happy';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener('click', () => {
    var nameBox = document.getElementById("nameBox");
    var name = nameBox.value;
    panel.innerHTML = `
        <i class="fa fa-heart"></i>
        <strong>Thank You ${name}!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Your response has been recorded</p>
        `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}
