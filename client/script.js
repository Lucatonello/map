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
    const name = elem.getAttribute('name');
    const nameFallback = elem.getAttribute('class');
    elem.addEventListener('click', async function() {
        this.style.fill = color;
        const response = await fetch('http://localhost:3000/addCountry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: name !== null ? name : nameFallback,
                userid: 1
            })
        }) 
        const result = await response.json();
        if (!result.succes) {
            throw new error(result.message);
        }

        if (errased === true) {
            this.style.fill = '#90e0bf';
            errased = false;
        }
    });
});
