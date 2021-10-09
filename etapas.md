1. Adicionar as variáveis de ambiente no arquivo .env
GITHUB_USER=lmuffato

REACT_APP_HAWKINS_URL=https://lmuffato-bk.herokuapp.com/
REACT_APP_HAWKINS_TIMEOUT=3000

REACT_APP_UPSIDEDOWN_URL=https://lmuffato-bd.herokuapp.com/
REACT_APP_UPSIDEDOWN_TIMEOUT=3000

2. Criar o buildpack para o react
heroku create -b mars/<nomeAplicacao>
heroku create -b mars/lmuffato-ft

3. Fazendo push da aplicação
git add .; git commit -m "aplicacao heroku";git push lmuffato-sd-010-a-stranger-things-frontend heroku master

heroku create --buildpack https://github.com/mars/create-react-app-inner-buildpack.git
heroku git:remote -a dry-ocean-32550