# pull official base image
FROM node:16.14.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

ARG REACT_APP_API_ROOT
ARG REACT_APP_CDN_URL
ARG REACT_APP_STOREFRONT_URL
ARG REACT_APP_TINY_MCE_API_KEY

RUN yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]