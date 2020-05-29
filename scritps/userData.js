var userData = {};

userData.nombre = localStorage.getItem('name');
userData.genero = localStorage.getItem('gender');
userData.edad = localStorage.getItem('age');
userData.ciudad = localStorage.getItem('city');
userData.salir = localStorage.getItem('out');
userData.dificultad = localStorage.getItem('difficulty');
userData.dias = localStorage.getItem('days');
userData.gimnasio = localStorage.getItem('gym');
userData.nadar = localStorage.getItem('swim');
userData.pesca = localStorage.getItem('fish');
userData.escalada = localStorage.getItem('climb');
userData.mirador = localStorage.getItem('watch');
console.log(userData);