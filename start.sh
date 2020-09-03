#!/bin/sh
cd sequelize
npx sequelize-cli db:migrate --url $DB_URL
npx sequelize-cli db:seed --url $DB_URL
cd ..
yarn start

