# Angular Repository

This branch contains an Angular application built with Angular CLI version 21.1.0.

## Branch Purpose

This branch focuses on the `Functions` feature under `src/Features/Functions/functions/`. It demonstrates TypeScript function concepts in an Angular component, including:

- typed function definitions
- optional and default parameters
- function expressions and arrow functions
- rest parameters
- function overloading
- function types and interfaces

## Project Structure

Key folders and files:

- `src/app/` - core application entry point and routing
- `src/Features/Functions/functions/` - `Functions` component demonstrating TypeScript function examples
- `src/styles.scss` - global styles
- `public/` - application assets
- `angular.json` - Angular build and serve configuration
- `package.json` - project dependencies and scripts

## Getting Started

Install dependencies:

```bash
npm install
```

Serve the app locally:

```bash
npm start
```

Open the browser at:

```text
http://localhost:4200/
```

The application will reload automatically when source files change.

## Development

Generate new components or features with the Angular CLI:

```bash
npm run ng generate component component-name
```

Build the project:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

## Notes

- The branch uses `@angular/core` and related Angular packages at `^21.1.0`.
- `typescript` is pinned to `~5.9.2`.
- `vitest` is configured for unit testing.

## Useful Commands

- `npm install` - install dependencies
- `npm start` - run development server
- `npm run build` - build production assets
- `npm test` - run unit tests

## References

- Angular CLI: https://angular.dev/cli
- TypeScript: https://www.typescriptlang.org/
- Vitest: https://vitest.dev/
