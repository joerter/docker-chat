FROM node:6.2.2

WORKDIR /app

COPY package.json npm-shrinkwrap.json /app/
RUN npm install

COPY . /app

CMD ["npm", "start"]
