# 🚀 Tech Store
## Visão Geral
Este projeto é um carrossel (slider) de produtos full-screen desenvolvido para simular a vitrine digital de uma loja de tecnologia (Tech Store). 
O objetivo é proporcionar uma experiência de usuário moderna e envolvente, combinando lógica de controle de slides em JavaScript e animações CSS3 complexas e sequenciais.

O projeto é uma forte demonstração de proficiência em Front-end, com foco especial na qualidade do design e na performance das transições.

✨ Tecnologias Utilizadas
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
- <img src="https://camo.githubusercontent.com/9bbd4c2b5f7cda139d91d34caa14392df56353ca55e19b58184610aa8b123854/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145">

## ⚙️ Funcionalidades e Implementação
### Lógica de Navegação e Controle
Controle de Estado: A função update(direction) gerencia o slide ativo, garantindo que a navegação seja contínua (loop) ao chegar ao primeiro ou último produto.

Temporização: Implementação de setInterval e clearInterval para criar a rotação automática do carrossel (a cada 5 segundos), reiniciando o timer após cada interação manual (botões prev/next).

<b>Indicadores Dinâmicos:</b> O JavaScript atualiza em tempo real

O número do slide (.numbers) com formatação (padStart(2, '0')).

O marcador visual (.dot.active) para indicar a posição atual.

### Design e Animação Profissionais
<b>Transição Sequencial:</b> Utilização de transition-delay no CSS para garantir que o texto de conteúdo (.product-tag, .product-name, .description) e a imagem entrem na tela em momentos ligeiramente diferentes, criando um efeito visual polido e dinâmico.

<b>Design Futurista:</b> Aplicação de gradientes e efeitos neon (#00f7ff) no logo, botões e indicadores.

<b>Animação de Fundo:</b> O uso de @keyframes no pseudo-elemento ::before do container cria o efeito de fundo pulsante (pulse), adicionando profundidade e estilo à interface.

<b>Estrutura de Componentes:</b> O código CSS está bem organizado para os elementos de navegação (header, .arrows, .indicators) e os itens do carrossel (.item, .product-img, .content).


## 🚀 Como Executar o Projeto Localmente
Siga estas etapas simples para rodar o projeto em sua máquina:<br>
Clone o Repositório: <br>
```git clone https://github.com/gabrieltomazi/NOME-DO-REPOSITORIO.git```

(Lembrete: Substitua NOME-DO-REPOSITORIO pelo nome real do seu repositório no GitHub, ex: tech-store-slider) <br>
Navegue até a Pasta: <br>
```cd NOME-DO-REPOSITORIO```

<b>Abra o index.html:</b> Basta clicar duas vezes no arquivo index.html no seu navegador (Chrome, Firefox, etc.). Não é necessário servidor web.<br>
🔗 Links
Demo Online <br>
Repositório: https://github.com/gabrieltomazi/TechStore
## 🧑‍💻 Desenvolvedor
### Gabriel Fernandes Tomazi
LinkedIn: https://www.linkedin.com/in/gabriel-tomazi/ <br>
GitHub: https://github.com/gabrieltomazi
