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

    
<h3>Os seguintes links mostram respectivamente as portas do projeto e os links correspondente a cada uma das portas deployiado no Heroku:</h3>

Todos os personagens

- (http://localhost:8080/v1/public/characters/)   
- (https://polar-river-85704.herokuapp.com/v1/public/characters)   

Todo o conteudo relacionado ao personagem de ID x
       
- (http://localhost:8080/v1/public/characters/1009718)
- (https://polar-river-85704.herokuapp.com/v1/public/characters/1009718)

Os quadrinhos que o personagem de ID X participa
   
- (http://localhost:8080/v1/public/characters/1009718/comics)
- (https://polar-river-85704.herokuapp.com/v1/public/characters/1009718/comics)

Os eventos que o personagem de ID X participa

- (http://localhost:8080/v1/public/characters/1009718/events)  
- (https://polar-river-85704.herokuapp.com/v1/public/characters/1009718/events)   

As series que o personagem de ID X participa

- (http://localhost:8080/v1/public/characters/1009718/series)
- (https://polar-river-85704.herokuapp.com/v1/public/characters/1009718/series)

As histórias que o personagem de ID X participa

- (http://localhost:8080/v1/public/characters/1009718/stories)
- (https://polar-river-85704.herokuapp.com/v1/public/characters/1009718/stories)
        

<h4>Para executar os testes utilize o comando:</h4>

    npm test

Uma lista com os testes será exibida, abaixo um grafico mostrando a porcentagem de código que os testes cobriram.


    




