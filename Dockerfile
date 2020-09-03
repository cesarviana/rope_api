FROM node:10
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN apt-get update && apt-get install apt-transport-https ca-certificates -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn -y

COPY . .
RUN yarn cache clean
RUN yarn install
RUN yarn add uuid
RUN yarn add --dev moment
RUN yarn installLocalModules
RUN chmod +x start.sh 
ENTRYPOINT ["./start.sh"]
