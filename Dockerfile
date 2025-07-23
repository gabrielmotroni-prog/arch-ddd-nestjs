FROM node:22-alpine

WORKDIR /app

RUN mkdir -p /app

COPY package.json app/


RUN yarn cache clean \
    rm -rf node_modules \
    yarn install --frozen-lockfile 

COPY . /app


EXPOSE 3003

# consumivel no dockercompose
# ENTRYPOINT [ "yarn", "start:dev" ]
