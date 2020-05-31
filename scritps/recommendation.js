window.addEventListener('load', () => {

    let group = [];
    group.push(userData);
    group[0].salir = (group[0].salir == 'true');
    group[0].dificultad = parseInt(group[0].dificultad);
    group[0].dias = parseInt(group[0].dias);
    group[0].gimnasio = parseInt(group[0].gimnasio);
    group[0].nadar = parseInt(group[0].nadar);
    group[0].pesca = parseInt(group[0].pesca);
    group[0].escalada = parseInt(group[0].escalada);
    group[0].mirador = parseInt(group[0].mirador);
    
    let dificultadmin = group[0].dificultad;
    const groupMembersDB = JSON.parse(localStorage.getItem('group'));
    groupMembersDB.forEach(element => {
        group.push(peopleDB[parseInt(element)]);
        if(peopleDB[parseInt(element)].dificultad < dificultadmin) {
            dificultadmin = peopleDB[parseInt(element)].dificultad;
        }
    });

    let groupValue = {
        ciudad: "Cali",
    }

    let salir = 0;
    let dias = 0;
    let gimnasio = 0;
    let nadar = 0;
    let pesca = 0;
    let escalada = 0;
    let mirador = 0;
    let dificultad = 0;
    group.forEach((e, index) => {
        if(e.salir) salir++;
        dias += e.dias;
        gimnasio += e.gimnasio;
        pesca += e.pesca;
        nadar += e.nadar;
        escalada += e.escalada;
        mirador += e.mirador;
        dificultad += e.dificultad;
    });
    dificultad += dificultadmin;
    dias = dias/group.length;
    gimnasio = gimnasio/group.length;
    pesca = pesca/group.length;
    nadar = nadar/group.length;
    escalada = escalada/group.length;
    mirador = mirador/group.length;
    dificultad = dificultad/(group.length+1);
    groupValue.dias = dias;
    groupValue.gimnasio = gimnasio;
    groupValue.pesca = pesca;
    groupValue.nadar = nadar;
    groupValue.escalada = escalada;
    groupValue.mirador = mirador;
    groupValue.dificultad = dificultad;
    if((salir + salir) > group.length) {
        groupValue.salir = true;
    } else {
        groupValue.salir = false;
    }

    results = [];

    function orderResults(a, b) {
        if(a.result > b.result) {
            return -1;
        } else if(a.result < b.result) {
            return 1;
        } else {
            return 0;
        }
    }

    routesDB.forEach((e) => {
        if((groupValue.salir || e.ciudad == 'Cali') && groupValue.dias > e.dias) {
            e.actividades.includes("Gimnasio") ? e.gimnasio = 10 : e.gimnasio = 1;
            e.actividades.includes("Escalada") ? e.escalada = 10 : e.escalada = 1;
            e.actividades.includes("Río") ? e.nadar = 10 : e.nadar = 1;
            e.actividades.includes("Mirador") ? e.mirador = 10 : e.mirador = 1;
            e.pesca = 1;
            const productoPunto = ((groupValue.dificultad) * (e.dificultad)) + ((groupValue.gimnasio * 0.5) * (e.gimnasio * 0.5)) + ((groupValue.pesca * 0.5) * (e.pesca * 0.5)) + ((groupValue.nadar * 0.5) * (e.nadar * 0.5)) + ((groupValue.escalada * 0.5) * (e.escalada * 0.5)) + ((groupValue.mirador * 0.5) * (e.mirador * 0.5));
            const magA = Math.sqrt(((groupValue.dificultad) * (groupValue.dificultad)) + ((groupValue.gimnasio * 0.5) * (groupValue.gimnasio * 0.5)) + ((groupValue.pesca * 0.5) * (groupValue.pesca * 0.5)) + ((groupValue.nadar * 0.5) * (groupValue.nadar * 0.5)) + ((groupValue.escalada * 0.5) * (groupValue.escalada * 0.5)) + ((groupValue.mirador * 0.5) * (groupValue.mirador * 0.5)));
            const magB = Math.sqrt(((e.dificultad) * (e.dificultad)) + ((e.gimnasio * 0.5) * (e.gimnasio * 0.5)) + ((e.pesca * 0.5) * (e.pesca * 0.5)) + ((e.nadar * 0.5) * (e.nadar * 0.5)) + ((e.escalada * 0.5) * (e.escalada * 0.5)) + ((e.mirador * 0.5) * (e.mirador * 0.5)));
            const resultValue = productoPunto / (magA * magB);
            
            results.push({
                nombre: e.nombre,
                result: resultValue,
                imagen: e.imagen,
                enlace: e.enlace,
                actividades: e.actividades,
                ubicacion: e.ubicacion,
                duración: e.duración,
                dificultad: e.dificultad,
                informacion: e.informacion,
            })
        }        
    });

    results.sort(orderResults);
    results = results.slice(0, 2);
    console.log(results);
    console.log(groupValue);
    
    const resultContainer = document.querySelector('.result__container');
    resultContainer.innerHTML = "";
    results.forEach((e) => {
        createCard(e, resultContainer);
    });
});