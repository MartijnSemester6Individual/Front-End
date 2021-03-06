# Frontend

The frontend of Martijn's individual project. It uses React and JavaScript.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[![Node CI](https://github.com/MartijnSemester6Individual/Front-End/actions/workflows/node.js.yml/badge.svg?branch=development)](https://github.com/MartijnSemester6Individual/Front-End/actions/workflows/node.js.yml)
[![Docker CI](https://github.com/MartijnSemester6Individual/Front-End/actions/workflows/docker-image.yml/badge.svg?branch=development)](https://github.com/MartijnSemester6Individual/Front-End/actions/workflows/docker-image.yml)

## Table of contents
- [General](#general)
- [Linting](#linting)
- [Development](#development)
- [Production](#production)
- [Learn more](#learn-more)

## General

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Linting

```bash
npm run lint

# Resolve auto fixable errors.
npm run lint:fix
```

## Testing
```bash
npm run test

npm run test:coverage # Test everything with coverage
```

## Development

To run the project in development use the following command:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

The project needs to be build first to run the production version.
```bash
npm run build
npm run start
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
