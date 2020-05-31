let createCard = (e, resultContainer) => {};

window.addEventListener('load', () => {

    createCard = (e, resultContainer) => {
        const resultCard = document.createElement('div');
        resultCard.classList.add('result');
        resultContainer.appendChild(resultCard);

        resultCard.addEventListener('click', () => {
            window.open(e.enlace)
        });
        
        const imgContainer = document.createElement('div');
        resultCard.appendChild(imgContainer);

        const img = document.createElement('img');
        img.setAttribute('src', './assets/routes/'+e.imagen);
        imgContainer.appendChild(img);

        const infoContainer = document.createElement('div');
        resultCard.appendChild(infoContainer);

        const nombre = document.createElement('p');
        nombre.innerHTML = '<strong>Nombre: </strong>' + e.nombre;
        infoContainer.appendChild(nombre);
        
        const ciudad = document.createElement('p');
        ciudad.innerHTML = '<strong>Ciudad: </strong>' + e.ubicacion;
        infoContainer.appendChild(ciudad);

        const dificultad = document.createElement('p');
        dificultad.innerHTML = '<strong>Dificultad: </strong>' + e.dificultad + ' / 10';
        infoContainer.appendChild(dificultad);

        const duracion = document.createElement('p');
        duracion.innerHTML = '<strong>Duración: </strong>' + (e.duración < 24) ? (e.duración + ' horas') : (e.duración/24 + ' días');
        infoContainer.appendChild(duracion);

        const informacion = document.createElement('p');
        informacion.innerHTML = '<strong>Información: </strong>' + e.informacion;
        infoContainer.appendChild(informacion);

        const actividadContainer = document.createElement('div');
        actividadContainer.classList.add('result__activities');
        imgContainer.appendChild(actividadContainer);
        e.actividades.forEach((act) => {
            const actividad = document.createElement('div');
            actividad.classList.add('actividad');
            actividadContainer.appendChild(actividad);
            actividad.innerHTML = act;
        });
    };
});