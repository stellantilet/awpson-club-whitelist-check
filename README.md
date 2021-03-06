# Create Solana Dapp with Next.JS

Want to start develop with Solana fetching NFTs from the blockchain or power-up your [Anchor](https://project-serum.github.io/anchor/getting-started/introduction.html) app with UI?   
This boilerplate can be used to setup your UI with React.JS / Next.JS and deploy it to [Heroku Platform](https://heroku.com/) in just a minutes.

## 🛵 ◍ Demo: https://awpson-club.herokuapp.com/

This project includes:

- Next.JS
- TypeScript
- [@solana/wallet-adapter](https://github.com/solana-labs/wallet-adapter) and [@solana/web3.js](https://solana-labs.github.io/solana-web3.js) for interactions with wallets & blockchain.
- Tailwind CSS (with [daisyUI](https://daisyui.com/))

## Getting Started

First, run the development server:

```bash
yarn
yarn run dev
```
## Style

[Tailwind CSS](https://tailwindcss.com/) or [daisyUI](https://daisyui.com/) are selected tools for rapid style development.

You can quickly change theme changing `daisy.themes` within `./tailwind.config.js`.
More info here: https://daisyui.com/docs/default-themes

This app encourage you to use CSS Modules over other style technics (like SASS/LESS, Styled Components, usual CSS).
It have modular nature and supports modern CSS. [Read more on Next.JS site](https://nextjs.org/docs/basic-features/built-in-css-support).
Anyway, if you want to connect LESS there is example code in `./next.config.js`

## Deploy on Heroku

Before push run localy `npm run build` to make sure app can be build succesffully on heroku .

Vercel will automatically create environment and deployment for you if you have heroku account connected to your GitHub account. Go to the heroku.com to connect it.
Then any push to `main` branch will automatically rebuild and redploy app.