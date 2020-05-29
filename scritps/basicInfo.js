window.addEventListener('load', () => {
    const next = document.querySelector('button');

    next.addEventListener('click', () => {
        const name = document.getElementById('name');
        const age = document.getElementById('age');
        const city = document.getElementById('city');
        
        if(name.value && age.value && city.value) {
            userData.name = name.value;
            userData.age = age.value;
            userData.city = age.city;

            
            window.location.href = './experience.html';
        }
    });
});