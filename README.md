# Strapi application

A quick description of your strapi application  
https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start-tutorial.html

## Running on Docker
```
git clone https://github.com/tsubakimoto/strapi-tutorial.git
cd strapi-tutorial
docker pull strapi/strapi:3.0.0-beta.17.6
docker run -it -p 1337:1337 -v `pwd`:/srv/app strapi/strapi:3.0.0-beta.17.6
```