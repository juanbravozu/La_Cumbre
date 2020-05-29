window.addEventListener('load', () => {
    const next = document.querySelector('button');

    next.addEventListener('click', () => {
        const out = document.getElementById('out_yes');
        const difficulty = document.getElementById('difficulty');
        const days = document.getElementById('days')
        const gym = document.getElementById('gym');
        
        localStorage.setItem('out', out.checked);
        localStorage.setItem('difficulty', difficulty.value);
        localStorage.setItem('days', days.value);
        localStorage.setItem('gym', gym.value);
        
        window.location.href = './activities.html';
    });
});