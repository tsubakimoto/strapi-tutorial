FROM strapi/strapi:3.0.0-beta.17.6

WORKDIR /srv/app

COPY . /srv/app

RUN npm install
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]