# Blockchain Developer Hub

Your roadmap to start web3 and blockchain development is here.

**https://blockchain.education/**

## Contribute to the content

All content files are located in `./data` folder

- Add new blockchain learning material to the `./data/learn.yaml`
- Add new build material to the `./data/build.yaml`
- Add new articles as markdown files to the `./data/pages` folder

## Contribute to the website

All the source code is located in `./src` folder

- Add new components to the `./src/components` folder
- Add new pages to the `./src/pages` folder
- Add new styles to the `./src/styles` folder
- Add new sections to the `./src/sections` folder
- Add new layouts to the `./src/layouts` folder

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Table Support

To learn more about how to make table supported look at:

- [remarkGfm](https://www.npmjs.com/package/remark-gfm) - Install remark Gfm
- [How to integrate it with serialize](https://githubhot.com/repo/hashicorp/next-mdx-remote/issues/229) - see how its
  integrated with serialize

**Important**: When adding a markdown for table, its important to put in a div with className `table-wrapper`, this
helps with the responsiveness of the table.

_Example_ :

```markdown
<div className='table-wrapper' markdown='1'>
  <!-- Table markdown here -->
</div>
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
