FROM node:20.17-alpine AS build

WORKDIR /app

COPY . .
RUN npm install && npm run build

FROM build AS production

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "dist/main"]
EXPOSE 3000
