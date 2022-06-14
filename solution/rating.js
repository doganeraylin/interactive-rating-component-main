
var numbers = document.querySelectorAll('.numbers p');

var submitButton = document.getElementById('btn');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        console.log(numbers[i].innerText);

    });
}


submitButton.addEventListener('click', function onclick(event) {
    event.target.style.backgroundColor = 'yellow';
});


