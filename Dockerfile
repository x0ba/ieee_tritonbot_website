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
EXPOSE 3000
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3000", "--dir", "build"]
