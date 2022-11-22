# MPA app on Astro & Strapi (for e-commerce)
![gif1](https://user-images.githubusercontent.com/6964795/203263808-aefa0391-8445-4497-ba45-871f476bc171.gif)

<p align="center">
  <b>Written on Astro Framwework (SSR mode) mode.</b> <br /><br />
  <img align="center" style="margin-right: 15px" width="50" src="https://astro.build/assets/press/logomark-light.png" alt="Astro" />
  <img align="center" width="50px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
       alt="" />
  <img align="center" style="margin-right: 15px" height="50"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
  <img align="center" style="margin-right: 15px"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt=""
       height="50" />
  <img align="center" style="margin-right: 15px" width="50"
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />
</p>

## 🚀 Run backend
#### cd /backend
```
├── backend/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```
#### install packages and run strapi
```
yarn install
yarn develop
```
#### Strapi admin creds:
```
Admin
Admin111
```

## 🧞 Run frontend

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
