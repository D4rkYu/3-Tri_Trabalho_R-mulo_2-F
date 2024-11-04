function criaCartao(tema,pergunta,resposta){
    const container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <div class="cartao-conteudo">
            <h3>${tema}</h3>
            <div class="cartao-conteudo-pergunta">${pergunta}</div>
            <div class="cartao-conteudo-resposta">${resposta}</div>
        </div>
    `
    container.appendChild(cartao)
}

criaCartao('História', 'Em que ano que iniciou-se a guerra do Vietnã?', 'Em 1955.')
criaCartao('Limbus Company', 'Qual é o verdadeiro nome de Don Quixote e quando é revelado?', "Seu verdadeiro nome é Sancho, e é revelado no Canto VII 'The Dream's ending'.")
criaCartao('... Cathy...?', 'CATHEERINEEEE!!!', 'I MUST BE THE REASON WHY YOU WERE ABLE TO BE KIND AND THE HEARTS WE HELD SO TIGHT WONT STAY BROKEN! LOVE COULD BE THE REASON WHY I STILL BELIEVE IN THESE LIES, THAT YOU LIVE A BETTER LIFE WITHOUT ME BY YOUR SIDE!')