window.addEventListener('load', () => {
    const next = document.querySelector('button');
    const man = document.getElementById('man');
    const woman = document.getElementById('woman');

    function selectGender(event) {
        man.classList.remove('img--active');
        woman.classList.remove('img--active');
        event.target.classList.add('img--active');
    }

    man.addEventListener('click', selectGender);

    woman.addEventListener('click', selectGender);

    next.addEventListener('click', () => {
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        const city = document.getElementById('city');
        
        
        

        if(name.value && age.value && city.value && (man.classList.contains('img--active') || woman.classList.contains('img--active'))) {
            localStorage.setItem('name', name.value);
            localStorage.setItem('age', age.value);
            localStorage.setItem('city', city.value);

            if(man.classList.contains('img--active')) {
                localStorage.setItem('gender', 'Hombre');
            } else {
                localStorage.setItem('gender', 'Mujer');
            }

            window.location.href = './experience.html';
        }
    });
});