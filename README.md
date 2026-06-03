## Projeto 👾

Esse é um recurso para **estudantes**, para terem uma estrutura básica para criar seus projetos com aplicações web, junto da `biblioteca P5.js` pré-integrada, para aqueles que estão familiarizados com a bibloteca.

## Abrindo o Projeto no **VScode** 📁

- Após instalar esse projeto, abra o ***VScode*** e clique em **`"Arquivo"`**, e selecione na janela que for aberta, a opção de **`"Abrir Pasta..."`**.


![](img/delete/abrir-pasta.png)


- Após isso, o **explorador de arquivos** será aberto, e você vai encontrar o caminho da pasta do projeto.

- Quando achar a pasta, clique nela e clique em **`"select folder/selecionar pasta"`**.

- Com isso o ***VScode*** abrirá o projeto para você possa fazer suas alterações livremente.

## Entendo com o Git e o GitHub funcionam 📖

Primeiramente para usar essas ferramentas... você precisa saber o que elas fazem, certo? 


Começando pelo **`git`**, ele servirá para *registrar todas as modificações* que você faz durante o desenvolvimento do projeto. Explicando de forma mais lúdica, o `git` funciona como uma camera, que, a cada coisa que você muda num arquivo ele "tira uma foto", mas como toda camera para conseguir tirar a foto da camera você precisa seguir alguns passos, esses, no caso do `git` são feitos por meio de **comandos**, que serão mostrados mais a frente.


Se o `git` é a camera que tira a foto do seu código, o **`GitHub`** já seria o instagram, já que ele tem como função, **permitir que você poste seu projeto _online_**. Assim você pode publicar ele para que pessoas possam *testar, usar, criar melhorias e também serve de __backup__ em casos que você acabe perdendo seu projeto ou computador*.

## Salvando e publicando o projeto do site com o Git e o GitHub 🚩

Bom agora que você conhece para que servem essas ferramentas, está na hora de você aprender a salvar seu projeto e publicá-lo.

- 1º Passo: abra a pasta de seu projeto pelo ***VScode***, e após isso você notará que na barra esquerda a um simbolo abaixo da lupa com o nome de **_"Controle de Código-Fonte"_**, e quando clicar nele abrirá uma janela como está:


![](img/delete/init-repositório.png)


- 2º Passo: ao clicar em **"inicializar repositório"**, o `git` será ativado e começara sua atividade, assim todos os arquivos que foram alterados do seu projetos serão registrados para futuramente serem serem salvos. (**OBS: esse passo só necessário fazer apenas uma vez**).

- 3º Passo: agora para salvar e publicar, primeiro **crie uma conta** no site do `GitHub`, depois de estar logado, você será redirecionado para a tela inicial do `GitHub`, e na parte esquerda aparecerá uma barra como está:


![](img/delete/new-rep-github.png)


clique em **"new"** para criar um novo repositório, e depois aparecerá uma página com algumas especificações para seu repositório, entre elas as mais importantes são:


![](img/delete/name-repo.png) ![](img/delete/add-readme.png)


A primeiro campo importante será o nome do repositório, aquele que servirá como *nome da postagem do seu projeto*, e o segundo é para adicionar um arquivo **_README.md_** que nele você irá por todas as informações para o usuário, desde atualizações importantes, agradecimentos de forks de contribuidores se tiver, detalhes sobre para que serve e como usar seu projeto e para criar um bom e como funciona a estrutura de um **README** veja mais em *[Link](https://raullesteves.medium.com/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8)*.

- 4º Passo: após preencher os campos com as informações necessárias, clique em **"new repository"** (botão está aí em baixo)


  ![](img/delete/github-newrepo.png)


  após isso voltaremos ao **VScode**.

  - 5º Passo: agora iremos por a mão na massa, após abrir o **VScode** com seu projeto aberto, olhe a aba superior e clique em **"Terminal"** e depois em **"Novo Terminal"**, como mostra a imagem:


 ![](img/delete/abrir-terminal.png)


 Com isso se abrirá uma aba na parte inferior do **VScode** chamada de **"Terminal"**


 ![](img/delete/terminal.png)


 perceba que no canto direito do terminal um icone seguido de **"bash"**, caso esteja escrito algo que não seja "bash" clique no "+" e selecione "bash". Após a vereficação, clique na janela de comando (clique no "$") e siga as seguintes instruções. (**OBS: esse passo só necessário fazer apenas uma vez**).


```
git config --global user.name seuNomeNoGitHub
```
```
git config --global user.email seuEmail.gmail.com
```


esses comandos faram uma conecção entre o **`GitHub`** e o **VScode**, assim você poderá mandar o projeto ao `GitHub`.



```
git init
```


`git init` fará que o **`git`** inicie o repositório


```
git add .
```


`git add . ` adciona **todos** os arquivos ao repositório.


```
git commit -m "nome do commit"
```


comando mais importante, já que ele criará o commit, e o commit é basicamente o registro permanente de todos os arquivos do seu projeto em uma atualização.


```
git remote add origin "https://github.com/seuNomeNoGitHub/nomeDoSeuRepositório"
```


`"https://github.com/seuNomeNoGitHub/nomeDoSeuRepositório" troque pela url do seu repositório no GitHub que você fez no passo 5.`


`git remote add origin ...` dizerá ao `GitHub` que todas as atualizações que você fazer seram redirecionadas ao link que você mandou de forma remota. (**OBS: esse passo só necessário fazer apenas uma vez**).


```
git push -u origin main
```


ultimo comando, ele transportará o commit que você fez para o repositório no `GitHub`, assim acabamos de salvar nosso projeto e salvar no GitHub.

