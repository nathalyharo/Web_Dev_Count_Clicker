
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
let counterValue = 0;

plusButton.addEventListener('click', () => {
    counterValue += 1;
    // console.log(counterValue);
    const countUpdate = counterValue;
    document.getElementById('counter').innerHTML = countUpdate;
});

minusButton.addEventListener('click', () => {
    counterValue -= 1;
    // console.log(counterValue);
    const countUpdate = counterValue;
    document.getElementById('counter').innerHTML = countUpdate;
});

