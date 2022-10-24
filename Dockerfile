FROM node:16 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# FROM nginx:1.18-alpine AS deploy-static

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/build .
# ENTRYPOINT [ "nginx" ,"-g", "daemon off;" ]

FROM node:16 AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/build .
RUN npm install --omit=dev
CMD ["node", "index.js"]