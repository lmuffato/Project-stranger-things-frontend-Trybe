# Boas vindas ao repositório frontend do projeto de Deploy - Stranger Things!

Aqui você vai encontrar os locais para colocar suas repostas relativas aos requisitos de frontend.

**Lembre-se**: coloque as respostas apenas dos requisitos que contém o seguinte direcionamento:

  - Adicione os comandos utilizados, de maneira sequencial, ao README do frontend.
  ```md
    heroku create mateus2a-ft --remote heroku-ft -b mars/create-react-app  
    heroku config:set --app mateus2a-ft REACT_APP_HAWKINS_URL="https://mateus2a-bk.herokuapp.com/" REACT_APP_HAWKINS_TIMEOUT=30000 REACT_APP_UPSIDEDOWN_URL="https://mateus2a-bd.herokuapp.com/" REACT_APP_UPSIDEDOWN_TIMEOUT=30000 GITHUB_USER="mateus2a"
    git push heroku-ft mateus2a-sd-010-a-stranger-things-frontend:master  
```


**Nota**: Este direcionamento está presente no [repositório](https://github.com/tryber/sd-010-a-stranger-things) em que os requisitos do projeto são destrinchados.
