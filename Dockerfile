FROM nginx

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY build /usr/share/nginx/html

