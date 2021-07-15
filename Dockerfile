FROM node:alpine3.11

RUN apk update && apk add bash

WORKDIR /usr/src/lifedex-api

COPY ./ ./

RUN npm install 

CMD ["/bin/bash"]