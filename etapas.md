1. Adicionar as variáveis de ambiente no arquivo .env
GITHUB_USER=lmuffato

REACT_APP_HAWKINS_URL=https://lmuffato-bk.herokuapp.com/
REACT_APP_HAWKINS_TIMEOUT=3000

REACT_APP_UPSIDEDOWN_URL=https://lmuffato-bd.herokuapp.com/
REACT_APP_UPSIDEDOWN_TIMEOUT=3000

heroku config:set GITHUB_USER="lmuffato" --app lmuffato-pd;
heroku config:set REACT_APP_HAWKINS_URL="https://lmuffato-bk.herokuapp.com/" --app lmuffato-pd;
heroku config:set REACT_APP_HAWKINS_TIMEOUT="3000" --app lmuffato-pd;
heroku config:set REACT_APP_UPSIDEDOWN_URL="https://lmuffato-bd.herokuapp.com/" --app lmuffato-pd;
heroku config:set REACT_APP_UPSIDEDOWN_TIMEOUT="3000" --app lmuffato-pd;

heroku config:set REACT_APP_DEV_MODE="true" --app lmuffato-pd;

2. Criar o buildpack para o react
heroku create -b mars/<nomeAplicacao>

heroku create --buildpack mars/lmuffato-pd
heroku create development -b mars/lmuffato-pd

3. Fazendo push da aplicação
git add .; git commit -m "aplicacao heroku";
git push heroku lmuffato-sd-010-a-stranger-things-frontend:master


4. Criando ambiente de desenvolvimento
4. 1.  Criando ambientes diferentes (remote) a partir de uma aplicação existente
heroku create lmuffato-pd --remote development

4. 2. Fazendo push por ambiente
git push heroku-<nomeDoRemote> <nomeDaBranchDoGitHub>-:master

git push development lmuffato-sd-010-a-stranger-things-frontend:master

### Excluindo apps do heroku
heroku apps:destroy lmuffato-pd

5. Renoemando o remote
git remote rename heroku <nomeDoRemote>

git remote rename heroku heroku-origin

git remote rename heroku hawkins

heroku git:remote -a lmuffato-pd