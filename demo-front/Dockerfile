FROM node:14-alpine as build-npm-stage

# make the 'app' folder the current working directory
WORKDIR /usr/local/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

# Run env
FROM nginx:alpine
COPY --from=build-npm-stage /usr/local/app/dist/front-demo /usr/share/nginx/html
EXPOSE 80
