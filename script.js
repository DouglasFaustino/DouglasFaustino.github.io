const mensagens = [
    'Você clicou no botão!',
    'Muito bem!',
    'Continue clicando!',
    'Você é incrível!',
    'Quase lá!'
];

let index = 0;

document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('texto').innerText = mensagens[index]; // Muda o texto
    index = (index + 1) % mensagens.length; // Avança para a próxima mensagem, voltando ao início se necessário
});
