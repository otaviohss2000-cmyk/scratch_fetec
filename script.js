document.addEventListener("DOMContentLoaded", () => {
    const gamesGrid = document.getElementById("gamesGrid");
    
    // Lista completa com os 15 jogos da FETEC mapeados
    const listaJogos = [
        { 
            nome: "Pokemon Infinite Fusion", 
            url: "https://scratch.mit.edu/projects/1070193438/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Pokemon.png"
        },
        { 
            nome: "Batman Joker'sMaze", 
            url: "https://scratch.mit.edu/projects/1070660604/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Batman.png"
        },
        { 
            nome: "Gênio Quiz", 
            url: "https://scratch.mit.edu/projects/1070681588/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Genio%20quiz.png"
        },
        { 
            nome: "Sonic e Mario", 
            url: "https://scratch.mit.edu/projects/1070685533/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Fogoagua.png"
        },
        { 
            nome: "Spongebob Flight", 
            url: "https://scratch.mit.edu/projects/1073877425/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Sponja.png"
        },
        { 
            nome: "Angry Birds Hallowen", 
            url: "https://scratch.mit.edu/projects/1064392867/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Angry.png"
        },
        { 
            nome: "Super Minecraft Jump", 
            url: "https://scratch.mit.edu/projects/1071826286/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Mine.png"
        },
        { 
            nome: "Ghetto Heroes", 
            url: "https://scratch.mit.edu/projects/1070659223/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Getto.png"
        },
        { 
            nome: "Dark Ness", 
            url: "https://scratch.mit.edu/projects/1070659918/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Dark.png"
        },
        { 
            nome: "Tetris", 
            url: "https://scratch.mit.edu/projects/1070660144/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/Tetris.png"
        },
        { 
            nome: "Minecraft 2D", 
            url: "https://scratch.mit.edu/projects/1070682122/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/minecraft.png"
        },
        { 
            nome: "Mortal Kombat", 
            url: "https://scratch.mit.edu/projects/1070683055/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/mortal.png"
        },
        { 
            nome: "Water Sort", 
            url: "https://scratch.mit.edu/projects/1070683990/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/water.png"
        },
        { 
            nome: "Zumbis Famintos", 
            url: "https://scratch.mit.edu/projects/1070684441/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/sumbis.png"
        },
        { 
            nome: "Sonic 2", 
            url: "https://scratch.mit.edu/projects/1070684995/fullscreen/",
            imagem: "https://tavernf.github.io/scratchFetec/sonico.png"
        }
    ];

    // Renderiza todos os cards na tela automaticamente
    listaJogos.forEach((jogo) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const imagemUrl = jogo.imagem || "https://placehold.co/300x180?text=Sem+Foto";

        gameCard.innerHTML = `
            <div class="game-thumb">
                <img src="${imagemUrl}" alt="${jogo.nome}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px 8px 0 0;">
            </div>
            <div class="game-info">
                <div class="game-title">${jogo.nome}</div>
            </div>
        `;

        // Evento de clique para abrir o jogo direto no modo tela cheia
        gameCard.addEventListener("click", () => {
            window.open(jogo.url, "_blank");
        });

        gamesGrid.appendChild(gameCard);
    });
});
