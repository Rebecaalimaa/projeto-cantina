// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, nome, preco, imagem) {
    // Criar um objeto para o item
    let item = {
        id: id,
        nome: nome,
        preco: parseFloat(preco),
        imagem: imagem,
        quantidade: 1
    };

    // Verificar se o carrinho já existe no localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verificar se o item já existe no carrinho
    let itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        // Se o item já existir, aumentar a quantidade
        itemExistente.quantidade++;
    } else {
        // Caso contrário, adicionar o novo item ao carrinho
        carrinho.push(item);
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualizar o número de itens no ícone do carrinho
    atualizarCarrinho();

    // Redirecionar para a página do carrinho
    window.location.href = 'carrinho.html'; // Altere para o caminho correto do seu carrinho
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let quantidadeItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    let carrinhoBadge = document.getElementById('carrinho-badge');
    if (carrinhoBadge) {
        carrinhoBadge.textContent = quantidadeItens;
    }
}

// Adicionar eventos de clique nos botões "Adicionar ao Carrinho"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link

        // Pegar os dados do botão clicado
        let id = this.getAttribute('data-id');
        let nome = this.getAttribute('data-nome');
        let preco = this.getAttribute('data-preco');
        let imagem = this.getAttribute('data-imagem');

        // Adicionar o produto ao carrinho e redirecionar
        adicionarAoCarrinho(id, nome, preco, imagem);
    });
});

// Carregar carrinho ao iniciar a página (opcional, caso queira exibir quantidade)
document.addEventListener('DOMContentLoaded', function() {
    atualizarCarrinho();
});
    