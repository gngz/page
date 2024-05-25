FROM node:18-alpine as base
RUN corepack enable pnpm
RUN pnpm config set store-dir /pnpm/store

FROM base as builder

WORKDIR /home/node/app
COPY ./apps/cms/package*.json ./
COPY pnpm-lock.yaml ./

COPY ./apps/cms .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store,source=/pnpm/store pnpm install
RUN pnpm build

FROM base as runtime
LABEL org.opencontainers.image.source https://github.com/gngz/page
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store,source=/pnpm/store pnpm install --prod
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["node", "dist/server.js"]
