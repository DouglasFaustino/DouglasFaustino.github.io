const mensagens = [
    'Você clicou 2x no botão!',
    'OK Muito bem!'
];

let index = 0;

document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('texto').innerText = mensagens[index]; // Muda o texto
    index = (index + 1) % mensagens.length; // Avança para a próxima mensagem
});

