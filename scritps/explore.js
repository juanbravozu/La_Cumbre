window.addEventListener('load' , () => {
    const routesContainer = document.querySelector('.routes__container');
    routesDB.forEach((e) => {createCard(e, routesContainer)});
});