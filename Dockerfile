FROM keymetrics/pm2:latest-jessie

# Bundle APP files
COPY app app/
COPY .editorconfig .
COPY .eslintrc.json .
COPY package.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn install
RUN yarn run build

COPY public public/

EXPOSE 3000

CMD [ "pm2-runtime", "start", "pm2.json" ]
