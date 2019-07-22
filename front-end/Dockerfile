FROM node:11.15.0-alpine as board-build
WORKDIR /app
COPY src ./
RUN yarn
RUN yarn run build

FROM nginx:alpine
COPY --from=board-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
