# mongo

docker mongo context

## setup

予め，mongo-express などで app という名前のデータベースを作成

```shell
$ docker-compose exec mongo
$ mongo -u root -p
<password入力>
> use app
> db.createUser({ user: "user", pwd: "password", roles: [{ role: "readWrite", db: "app" }]})
> exit
$ exit
```
