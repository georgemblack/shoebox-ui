FROM nginx:1.17
WORKDIR /app
COPY ./src /app/public
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
