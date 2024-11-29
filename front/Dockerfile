FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CND ["nginx", "-g", "dameom off;"]
