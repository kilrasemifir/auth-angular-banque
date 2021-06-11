FROM node:14 AS builder

WORKDIR /app
COPY . .
RUN npm install -g npm@latest
RUN npm i
RUN npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
COPY --from=builder /app/dist/front .

CMD ["nginx", "-g", "daemon off;"]