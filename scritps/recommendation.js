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
    
    const groupMembersDB = JSON.parse(localStorage.getItem('group'));
    groupMembersDB.forEach(element => {
        group.push(peopleDB[parseInt(element)]);
    });

    let groupValue = {
        ciudad: "Cali",
    }

    let salir = 0;
    group.forEach((e) => {
        if(e.salir) salir++;
    });
    if((salir + salir) > group.length) {
        groupValue.salir = true;
    } else {
        groupValue.salir = false;
    }

    console.log(group);
    console.log(groupValue);
});