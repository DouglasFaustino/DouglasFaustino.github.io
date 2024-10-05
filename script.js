// Criação de um array (lista) que contém as mensagens que serão exibidas ao clicar no botão
const mensagens = [
    'Você clicou no botão!',
    'Muito bem!',
    'Continue clicando!',
    'Você é incrível!',
    'Quase lá!'
];

// Inicializa uma variável 'index' que será usada para controlar qual mensagem está sendo exibida
let index = 0;

// Seleciona o botão pelo seu ID e adiciona um evento de clique
document.getElementById('meuBotao').addEventListener('click', function() {
    // Seleciona o parágrafo onde o texto será alterado
    const textoElement = document.getElementById('texto');
    
    // Usamos setTimeout para atrasar a mudança do texto em 200 milissegundos
    setTimeout(() => {
        // Altera o conteúdo do parágrafo para a mensagem correspondente ao índice atual
        textoElement.innerText = mensagens[index];
        
        // Atualiza o índice para mostrar a próxima mensagem
        // O operador % garante que, ao chegar ao final do array, o índice volte para 0
        index = (index + 1) % mensagens.length; 
    }, 200); // 200 milissegundos de atraso
});


