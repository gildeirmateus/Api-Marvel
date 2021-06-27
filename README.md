<h1>Trabalho Api-Marvel</h1>

<h2>Trabalho realizado para a aula de Tópicos Avançados.</h2>

Para rodar o teste unitário os seguintes passos devem ser seguidos:

Clone o repositório:

    git clone https://github.com/gildeirmateus/Api-Marvel.git

Localize e acesse a pasta do projeto pelo terminal

    cd Api-Marvel

Com a pasta aberta em uma IDE, a recomendação é que utilize o Visual Studio Code. Abra o terminal e execute o seguinte comando:

    npm install

Para executar o projeto utilize:

    npm start

O projeto ficará disponivel na porta:

- (http://localhost:8080/)

    

As seguintes portas mostram respectivamente

    Todos os personagens
<p><a href="http://localhost:8080/v1/public/characters/"></a></p>

        

    Todo o conteudo relacionado ao personagem de ID x
<a href="http://localhost:8080/v1/public/characters"></a>
<p></p>        
    
    Os quadrinhos que o personagem de ID X participa
<a href="http://localhost:8080/v1/public/characters/1009718/comics"></a>
<p></p>        

    Os eventos que o personagem de ID X participa

        http://localhost:8080/v1/public/characters/1009718/events

    As series que o personagem de ID X participa
    
        http://localhost:8080/v1/public/characters/1009718/events

    As histórias que o personagem de ID X participa

        http://localhost:8080/v1/public/characters/1009718/stories


Para executar os testes utilize o comando:

    npm test

Uma lista com os testes será exibida, abaixo um grafico mostrando a porcentagem de código que os testes cobriram.


    




