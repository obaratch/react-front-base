#BUILD
FROM node:18-alpine AS BUILDER

WORKDIR /home/node

RUN set -x
RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "Asia/Tokyo" > /etc/timezone && \
    apk del tzdata

COPY ./package*.json ./
RUN npm config set strict-ssl false
RUN npm ci

COPY ./config ./
COPY ./vite.config.js ./
COPY ./index.html ./
COPY ./src ./src
RUN chown -R node:node ./src
RUN npm run build

#PACK
FROM nginx:1-alpine
COPY --from=BUILDER /home/node/dist /usr/share/nginx/html
