document.addEventListener('DOMContentLoaded', function() {
    // Lógica para a seção About
    document.getElementById('read-more-about-btn').addEventListener('click', function() {
        var moreText = document.getElementById('more-text');
        var btn = document.getElementById('read-more-about-btn');

        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            btn.textContent = 'Leia menos'; // Muda o texto do botão
        } else {
            moreText.classList.add('hidden');
            btn.textContent = 'Leia mais'; // Restaura o texto do botão
        }
    });

    // Lógica para a seção Background
    document.getElementById('read-more-background-btn').addEventListener('click', function() {
        var moreText = document.getElementById('more-background-text');
        var btn = document.getElementById('read-more-background-btn');

        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            btn.textContent = 'Leia menos'; // Muda o texto do botão
        } else {
            moreText.classList.add('hidden');
            btn.textContent = 'Leia mais'; // Restaura o texto do botão
        }
    });
});