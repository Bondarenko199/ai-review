# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript REST API built with Express 5. Uses CommonJS modules.

## Commands

- `npm run build` — Compile TypeScript to `dist/`
- `npm run dev` — Start dev server with auto-reload (nodemon + ts-node)
- `npm start` — Run compiled production server
- `npm test` — Run all tests with Jest
- `npm run test:watch` — Run tests in watch mode
- `npx jest tests/foo.test.ts` — Run a single test file

## Architecture

- **`src/app.ts`** — Express app setup (middleware, route mounting). Exported separately from the server for testability.
- **`src/server.ts`** — Entry point that starts the HTTP listener. Uses `PORT` env var (default 3000).
- **`src/routes/`** — Route handlers, each exporting a Router.
- **`src/middleware/`** — Custom Express middleware.
- **`tests/`** — Jest tests using supertest against the app instance (no server startup needed).

## TypeScript Config

- `tsconfig.json` — Used for building (`src/` only, outputs to `dist/`).
- `tsconfig.test.json` — Extends base config, adds Jest types, includes both `src/` and `tests/`.
