# Next with React 18 and Jest

This version uses React 18 and it is test to see how well everything integrates with other libs I am using in other projects

## RSD dependencies

```bash
# material ui
yarn add @emotion/cache @emotion/react @emotion/server @emotion/styled @mui/icons-material @mui/material
# tailwind (more info here https://tailwindcss.com/docs/guides/nextjs)
yarn add @tailwindcss/typography && yarn add -D tailwindcss postcss autoprefixer
# progress bar (top screen)
yarn add nprogress && yarn add -D @types/nprogress
# cookie parser and validator
yarn add cookie jsonwebtoken && yarn add -D @types/cookie @types/jsonwebtoken
# form validation
yarn add react-hook-form
# markdown support
yarn add react-markdown
# drag-n-drop
yarn add react-beautiful-dnd && yarn add -D @types/react-beautiful-dnd
# D3 visualisation lib
yarn add d3 && yarn add -D @types/d3
# image resizing (next dependency) - where is this used?!?
yarn add sharp
```

## Jest

Based on documentation to setting up [Jest with Rust compiler](https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler)

```bash
# npm way
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
# yarn way
yarn add -D jest @testing-library/react @testing-library/jest-dom
```

- create jest.config.js file
- create jest.stup.js file for additional react-testing-library matchers support

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
