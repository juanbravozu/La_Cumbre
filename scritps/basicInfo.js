window.addEventListener('load', () => {
    const next = document.querySelector('button');

    next.addEventListener('click', () => {
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        const city = document.getElementById('city');
        const man = document.getElementById('man');
        const woman = doc.getElementById('woman');
        
        function selectGender(event) {
            man.classList.remove('img--active');
            woman.classList.remove('img--active');
            event.target.classList.add('img--active');
        }

        if(name.value && age.value && city.value && (man.classList.contains('img--active') || woman.classList.contains('img--active'))) {
            localStorage.setItem('name', name.value);
            localStorage.setItem('age', age.value);
            localStorage.setItem('city', city.value);

            if(man.classList.contains('img--active')) {
                localStorage.setItem('gender', true);
            } else {
                localStorage.setItem('gender', false);
            }

            window.location.href = './experience.html';
        }
    });
});