FROM node:latest as build

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:latest as deploy

COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

#CMD [ "npm","start" ]