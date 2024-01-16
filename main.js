const radioButtons = document.querySelectorAll('input[name="rating"]');
const submitBtn = document.querySelector('#submit')

const ratingState = document.getElementById('rating-state');
const thanksState = document.getElementById('thanks-state');

const ratingOutput = document.getElementById('rating-output');

submitBtn.addEventListener('click', () => {
    let ratingSelected;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            ratingSelected = radioButton.value;
            break;
        }
    }

    ratingOutput.innerHTML = ratingSelected;

    ratingState.classList.add('hidden');
    thanksState.classList.remove('hidden')
});