document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const changeColorBtn = document.getElementById('changeColor');
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    let colorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        greeting.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        
        greeting.style.transform = 'scale(1.1)';
        setTimeout(() => {
            greeting.style.transform = 'scale(1)';
        }, 200);
    });
    
    greeting.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    greeting.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});