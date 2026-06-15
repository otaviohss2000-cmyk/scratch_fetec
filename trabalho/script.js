// Script para gerar os 20 espaços de jogos automaticamente
document.addEventListener("DOMContentLoaded", () => {
    const gamesGrid = document.getElementById("gamesGrid");
    const totalJogos = 20;

    // Array de exemplos para deixar os nomes divertidos
    const nomesDivertidos = [
       
    ];

    for (let i = 1; i <= totalJogos; i++) {
        // Criando o elemento do card do jogo
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Nome do jogo baseado na lista ou genérico
        const nomeJogo = nomesDivertidos[i - 1] || `Incrível Jogo #${i}`;
        
        // Estrutura interna do card
        gameCard.innerHTML = `
            <div class="game-thumb" style="background: linear-gradient(135deg, #4D97FF22, #FF8C1A22);">
                </div>
            <div class="game-info">
                <div class="game-title">${nomeJogo}</div>
                <div class="game-author">@criador_player${i}</div>
            </div>
        `;

        // Efeito de clique divertido (pode ser configurado para abrir o link do jogo)
        gameCard.addEventListener("click", () => {
            alert(`Você clicou para jogar: ${nomeJogo}! 🎮`);
        });

        // Adiciona o card ao grid principal
        gamesGrid.appendChild(gameCard);
    }
});