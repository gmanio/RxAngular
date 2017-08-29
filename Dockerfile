FROM ubuntu:16.04

RUN \
  apt-get update && \
  apt-get install -y nginx nano && \
  rm -rf /var/lib/apt/lists/* && \
  echo "\ndaemon off;" >> /etc/nginx/nginx.conf && \
  chown -R www-data:www-data /var/lib/nginx

VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

ADD source.zip /var/www/html/
RUN cd /var/www/html && unzip source.zip && rm source.zip

WORKDIR /etc/nginx
EXPOSE 80 443
CMD ["nginx"]
