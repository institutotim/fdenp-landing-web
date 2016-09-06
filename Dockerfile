FROM node
MAINTAINER Estevão Mascarenhas

# Install nginx
RUN \
  apt-get update -yq && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends nginx && \
  mkdir -p /var/www

COPY nginx/nginx.conf /etc/nginx/nginx.conf

RUN npm -g install gulp-cli bower

RUN mkdir -p /opt/src/landing-page

COPY . /opt/src/landing-page
WORKDIR /opt/src/landing-page

RUN npm install
RUN npm rebuild node-sass
RUN bower install --allow-root

RUN gulp production:build

RUN mv /opt/src/landing-page/build/production /var/www/unicef-landing-page

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./entrypoint.sh /
RUN rm /etc/nginx/sites-enabled/default
RUN chown -R nobody. /var/www

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx"]
