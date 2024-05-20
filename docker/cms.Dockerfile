FROM node:18-alpine as base
RUN corepack enable pnpm

FROM base as builder

WORKDIR /home/node/app
COPY ./apps/cms/package*.json ./
COPY pnpm-lock.yaml ./

COPY ./apps/cms .
RUN pnpm install
RUN pnpm build

FROM base as runtime
LABEL org.opencontainers.image.source https://github.com/gngz/page
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN pnpm install --prod
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
