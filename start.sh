#!/bin/sh
cd sequelize
npx sequelize-cli db:migrate
npx sequelize-cli db:seed
cd ..
yarn start

