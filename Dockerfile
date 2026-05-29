FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/build ./build
COPY --from=build /app/docusaurus.config.ts ./docusaurus.config.ts
COPY --from=build /app/sidebars*.ts ./
COPY --from=build /app/src ./src
COPY --from=build /app/static ./static
COPY --from=build /app/about ./about
COPY --from=build /app/mechanical ./mechanical
COPY --from=build /app/electrical ./electrical
COPY --from=build /app/embedded ./embedded
COPY --from=build /app/ai ./ai
COPY --from=build /app/past_paper ./past_paper
EXPOSE 3000
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3000", "--dir", "build"]
