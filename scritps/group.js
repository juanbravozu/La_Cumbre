window.addEventListener('load', () => {

    const select = document.getElementById('people');

    peopleDB.forEach((elem, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerHTML = elem.nombre;
        select.appendChild(option);
    });

    const addBtn = document.getElementById('add');
    const groupContainer = document.querySelector('.groupContainer');
    let groupMembers = [];

    addBtn.addEventListener('click', () => {
        if(groupMembers.length < 5) {
            const options = document.querySelectorAll('option');
            let selectedOption;
    
            for (var i = 0; i < options.length; i++) {
                if(options[i].value == select.value) {
                    selectedOption = options[i].value;
                    options[i].disabled = true;
                    if(i+1 < options.length) {
                        select.value = options[i+1].value
                    } else {
                        select.value = options[i-1].value
                    }
                    i = options.length;
                }
            }
    
            const group = document.createElement('div');
            const icon = document.createElement('img');
            if(peopleDB[selectedOption].genero == 'Hombre') {
                icon.setAttribute('src', './assets/manIcon.png');
            } else {
                icon.setAttribute('src', './assets/womanIcon.png');
            }
            group.appendChild(icon);
    
            const name = document.createElement('h3');
            name.innerHTML = peopleDB[selectedOption].nombre;
            group.appendChild(name);
    
            groupContainer.appendChild(group);
    
            groupMembers.push(selectedOption);
        }        
    });

    const endBtn = document.getElementById('end');

    endBtn.addEventListener('click', () => {
        localStorage.setItem('group', JSON.stringify(groupMembers));

        window.location.href = './recommendation.html';
    });
});