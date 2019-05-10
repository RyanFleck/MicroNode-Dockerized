FROM node:10-stretch
WORKDIR /usr/src/app

# Install deps, copy source code.
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 7654 
CMD ["npm","start"]
