# instalando angular cli
sudo npm install -g @angular/cli@1.1.2 --unsafe-perm=true --allow-root

#criando um projeto

ng new $nomeDoProjeto

#rodar projeto

ng serve

#rodar escutando qualquer ip
ng serve --host 0.0.0.0 --disable-host-check

#criar componente

ng generate component $nome
ng g c $nome

#criar componente sem test unitario

ng g c $nome --spec=false

#adicionar boostrap ao packge json
npm install bootstrap --save