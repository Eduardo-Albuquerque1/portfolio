const btn = document.getElementById('toggle-theme')
 
btn.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark-mode')) {
        document.documentElement.classList.remove('dark-mode')
        btn.textContent = '🌙'
    } else {
        document.documentElement.classList.add('dark-mode')
        btn.textContent = '☀️'
    }
})