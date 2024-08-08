document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetID);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adiciona funcionalidade ao formulário de contato
    const contatoForm = document.getElementById('contato-form');
    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Mensagem:', mensagem);

            alert('Mensagem enviada com sucesso!');
        });
    }
});
document.querySelector('.entrada').addEventListener('animationend', function() {
    this.classList.add('hidden'); 
});


