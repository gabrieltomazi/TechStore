# 🚀 Tech Store

https://github.com/user-attachments/assets/100e9e6c-2d18-4328-bb1d-81aac7f65982

## Visão Geral
Este projeto é um carrossel de produtos desenvolvido para simular a vitrine digital de uma loja de tecnologia (Tech Store). 
O objetivo é proporcionar uma experiência de usuário moderna e envolvente, combinando lógica de controle de slides em JavaScript e animações sequenciais.

✨ Tecnologias Utilizadas <br>

  <img width="40px" alt="html" src="https://github.com/user-attachments/assets/34d39b86-6f7a-4080-817f-3323874e3bbc" />
  <img width="40px" alt="css" src="https://github.com/user-attachments/assets/5c840245-3d50-4bc7-948b-b7ead8ca775c" />
  <img width="40px" alt="javascript" src="https://github.com/user-attachments/assets/63203281-69b3-4a73-86d4-8c28ff3e457a" />

## ⚙️ Funcionalidades e Implementação
### Lógica de Navegação e Controle
Controle de Estado: A função update(direction) gerencia o slide ativo, garantindo que a navegação seja contínua (loop) ao chegar ao primeiro ou último produto.

Temporização: Implementação de setInterval e clearInterval para criar a rotação automática do carrossel (a cada 5 segundos), reiniciando o timer após cada interação manual (botões prev/next).

<b>Indicadores Dinâmicos:</b> O JavaScript atualiza em tempo real

O número do slide (.numbers) com formatação (padStart(2, '0')).

O marcador visual (.dot.active) para indicar a posição atual.

### Design e Animação
<b>Transição Sequencial:</b> Utilização de transition-delay no CSS para garantir que o texto de conteúdo (.product-tag, .product-name, .description) e a imagem entrem na tela em momentos ligeiramente diferentes, criando um efeito visual polido e dinâmico.

<b>Design Futurista:</b> Aplicação de gradientes e efeitos neon (#00f7ff) no logo, botões e indicadores.

<b>Animação de Fundo:</b> O uso de @keyframes no pseudo-elemento ::before do container cria o efeito de fundo pulsante (pulse), adicionando profundidade e estilo à interface.

<b>Estrutura de Componentes:</b> O código CSS está bem organizado para os elementos de navegação (header, .arrows, .indicators) e os itens do carrossel (.item, .product-img, .content).


## 🚀 Como Executar o Projeto Localmente
Siga estas etapas simples para rodar o projeto em sua máquina:<br>
Clone o Repositório: <br>
```git clone https://github.com/gabrieltomazi/TechStore.git```

Navegue até a Pasta: <br>
```cd TechStore```

<b>Abra o index.html:</b> Basta clicar duas vezes no arquivo index.html no seu navegador (Chrome, Firefox, etc.). Não é necessário servidor web.<br>
🔗 Links <br>
<a href="https://gabrieltomazi.github.io/TechStore/">Demo Online</a> <br>
## 🧑‍💻 Desenvolvedor - Gabriel Fernandes Tomazi 
<a href="https://www.linkedin.com/in/gabriel-tomazi/"><img width="50px" alt="image" src="https://github.com/user-attachments/assets/c7122cef-3681-49c2-9923-0a7eb9d1e71c" />

