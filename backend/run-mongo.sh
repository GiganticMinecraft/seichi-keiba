#!/bin/bash
cd docker
# ReplicaSetを適用するコマンド。最初に一度実行しないと、DBにアクセスできない
# docker-compose exec mongodb-primary mongo admin -u admin -p admin /docker-entrypoint-initdb.d/init.js
docker-compose down
docker-compose up --remove-orphans
