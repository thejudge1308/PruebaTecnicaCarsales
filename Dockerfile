# Dockerfile for Angular App - Rick and Morty
# Author: Patricio Quezada Laras
FROM node:14 as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --prod
FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
