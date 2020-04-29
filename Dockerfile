FROM node
WORKDIR /usr/src/rentapp
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 9000
CMD [ "node", "app.js" ]