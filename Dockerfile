# Build
FROM node:15.8.0-alpine AS node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

#Deploy
FROM nginx:alpine

COPY --from=node /app/dist/covid19 /usr/share/nginx/html
