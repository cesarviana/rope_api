FROM node:10
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN apt-get update && apt-get install apt-transport-https ca-certificates -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn -y

RUN yarn install
COPY . .
RUN yarn installLocalModules
USER node
CMD ["yarn start"]
