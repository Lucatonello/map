let path = document.querySelectorAll('path');
let colorBtn = document.getElementById('colorBtn');
let colorInput = document.getElementById('color');
let color = 'red';
let erraseBtn = document.getElementById('delete');
let errased = false;

colorBtn.addEventListener('click', function() {
    color = colorInput.value;
});

erraseBtn.addEventListener('click', function() {
    errased = true;
})

path.forEach(function (elem) {
    elem.addEventListener('click', function() {
        this.style.fill = color;
        if (errased === true) {
            this.style.fill = '#90e0bf';
            errased = false;
        }
    });
});
