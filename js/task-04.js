const counter = {
  value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    }, 
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.log(decrementBtn)
console.log(incrementBtn)
console.log(valueEl)

decrementBtn.addEventListener('click', function () {
counter.decrement();
valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
counter.increment();
valueEl.textContent = counter.value;
});