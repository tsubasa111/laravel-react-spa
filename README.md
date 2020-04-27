# 環境設定

### dockerの設定
```
cd ~/laravel-react-spa/setup

sh shell_command.sh

cd ~/laravel-react-spa/laradock

docker-compose up --build nginx workspace php-fpm phpmyadmin mysql
```

### バックエンド側の設定
```
sshでworkspaceに入って

composer install

php artisan passport:install

php artisan migrate
```

### フロントエンド側の設定
```
sshでworkspaceに入って

npm i

npm run dev
```

### url
http://localhost:8000  

### phpmyadmin
http://localhost:8070
