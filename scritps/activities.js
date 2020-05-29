window.addEventListener('load', () => {
    const next = document.querySelector('button');

    next.addEventListener('click', () => {
        const swim = document.getElementById('swim');
        const fish = document.getElementById('fish');
        const climb = document.getElementById('climb')
        const watch = document.getElementById('watch');
        
        localStorage.setItem('swim', swim.value);
        localStorage.setItem('fish', fish.value);
        localStorage.setItem('climb', climb.value);
        localStorage.setItem('watch', watch.value);
        
        window.location.href = './group.html';
    });
});