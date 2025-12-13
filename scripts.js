let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let items = document.querySelectorAll('.item')
let dots = document.querySelectorAll('.dot')
let numberIndicator = document.querySelector('.numbers')
let list = document.querySelector('.list')


let active = 0;
let total = items.length;
let timer;

clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000);

function update(direction) {
    clearInterval(timer)
    timer = setInterval(() => {
        update(1)
    }, 5000);

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }

    } else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }


    }
    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2, '0')
}


prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(+1)
})