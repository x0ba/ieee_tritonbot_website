# UCSD TritonBots Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

The site will be available at `http://localhost:3000`.

## Deployment

This repo is configured to deploy automatically to GitHub Pages with GitHub Actions.

1. Push to `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The built site is deployed to GitHub Pages.

One-time GitHub setup:

1. Open repository `Settings` -> `Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.

Manual fallback deploy from local machine:

```bash
GIT_USER=ysh0305 npm run deploy
```
