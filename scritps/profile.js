window.addEventListener('load', () => {

    if(localStorage.getItem('gender') && localStorage.getItem('name') && localStorage.getItem('difficulty') 
    && localStorage.getItem('age') && localStorage.getItem('city')) {
        const img = document.getElementById('profileImg');
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        const difficulty = document.getElementById('difficulty');
        const city = document.getElementById('city');

        if(localStorage.getItem('gender') == 'Mujer') {
            img.setAttribute('src', './assets/womanIcon.png');
        }

        name.innerHTML = localStorage.getItem('name');
        age.innerHTML = localStorage.getItem('age');
        difficulty.innerHTML = localStorage.getItem('difficulty');
        city.innerHTML = localStorage.getItem('city');
    }
    return;
});