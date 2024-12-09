// Função para carregar os itens do carrinho
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let carrinhoItens = document.getElementById('carrinho-itens');
    let totalPreco = 0;

    // Limpar itens antes de renderizar novamente
    carrinhoItens.innerHTML = '';

    // Loop para adicionar os itens ao carrinho
    carrinho.forEach(item => {
        // Calcular o total
        totalPreco += item.preco * item.quantidade;

        // Criar elemento do item no carrinho
        let itemCarrinho = document.createElement('div');
        itemCarrinho.classList.add('item-carrinho');

        itemCarrinho.innerHTML = `
            <div class="descricao">
                <h4>${item.nome}</h4>
                <div class="preco">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <div>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
        `;

        // Adicionar o item ao carrinho
        carrinhoItens.appendChild(itemCarrinho);
    });

    // Atualizar o total do carrinho
    document.getElementById('total-preco').textContent = totalPreco.toFixed(2);
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Filtra os itens, removendo o item com o id correspondente
    carrinho = carrinho.filter(item => item.id !== id);

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Recarrega a página para atualizar o carrinho
    carregarCarrinho();
}

// Função para finalizar a compra
document.getElementById('finalizar-compra').addEventListener('click', function() {
    alert('Compra finalizada com sucesso!');
    // Aqui você pode adicionar um redirecionamento ou outras ações para finalizar a compra
});

// Carregar os itens do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    carregarCarrinho();
});
