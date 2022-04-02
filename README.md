# Next with React 18 and Jest

This version uses React 18 and it is test to see how well everything integrates with other libs I am using in other projects


## RSD dependencies

- libraries

```bash
# material ui with styled components
yarn add @mui/styled-engine @mui/styled-engine-sc styled-components @mui/icons-material @mui/material next-transpile-modules
yarn add -D @types/styled-components

yarn add @tailwindcss/typography
yarn add nprogress cookie d3 jsonwebtoken
# form validation
yarn add react-hook-form
# markdown
yarn add react-markdown
# drag-n-drop
yarn add react-beautiful-dnd
# image resizing (next dependency)
yarn add sharp

```

## Styled components

This setup is based on [this codesandbox](https://codesandbox.io/s/nextjs-ssr-with-styled-components-typescript-forked-f4r1lr?file=/package.json:760-842).

When using MUI with styled components instead of default emotion

- additional resolution need to be placed in package.json
- next.config.js need to have additional transpile definitions
- tsconfig.json need to have additional definitions

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
