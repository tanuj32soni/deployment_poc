FROM node:12
WORKDIR /src
ADD . /src
RUN npm install
CMD ["npm", "start"]