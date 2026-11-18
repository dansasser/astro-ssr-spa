<h1 align="center">Astro SSR SPA Template</h1>
<p align="center">with HTMX, Daisy UI, Tailwind CSS, and MongoDB <br /> by <br /> DTS</p>

[![Official Website](https://img.shields.io/badge/Official%20Page-astro--ssr--spa.org-blue)](https://astro-ssr-spa.org) [![Licence](https://img.shields.io/badge/Licence-Apache%202.0-green)](https://github.com/dansasser/astro-ssr-spa/blob/main/LICENSE) [![Package](https://img.shields.io/badge/NPM-v2.0.3-blue)](https://www.npmjs.com/package/astro-ssr-spa/v/2.0.3)


_This repository is constantly being updated, so check back often for updates!_

![Screenshot 2024-09-01 104703](https://github.com/user-attachments/assets/a4ab598d-4714-4447-8305-4a7e56d9455f)


Welcome to the official repository for the Astro SSR SPA Template! For detailed documentation, demos, and the latest updates, visit our official website: [astro-ssr-spa.org](https://astro-ssr-spa.org).

This [Astro single-page application (SPA) template](https://github.com/dansasser/astro-ssr-spa) is designed to help you build robust and scalable web applications quickly. It includes integrated support for [HTMX](https://htmx.org/), [Daisy UI](https://daisyui.com/), and [Tailwind CSS](https://tailwindcss.com/) to create dynamic, responsive user interfaces. Perfect for building [e-commerce sites](https://github.com/dansasser/astro-ssr-spa), blogs, or portfolios, this template features comprehensive session management with [mongo-connect](https://www.npmjs.com/package/mongo-connect) and MongoDB integration, providing a secure and efficient development environment.

## Table of Contents

-  [Key Features](#key-features)
-  [Use Cases](#use-cases)
-  [Installation](#%EF%B8%8F-installation-and-usage)
-  [Custom Logger](#custom-logger)
-  [Concurrently & Wait-On](#Concurrently-and-Wait-On-with-Microsoft-DevTunnel)
-  [Microsoft DevTunnel](#microsoft-devtunnel)
-  [Project Structure](#-project-structure)
-  [Commands](#-commands)
-  [Useful Links](#Useful-Links)
-  [Resources](#Resources)
-  [Contribute](#Contributing)
-  [License](#License)
-  [Why Astro SSR SPA](#-Why-Choose-This-Template)

### **Key Features**
Explore the full list of features below and see examples on our [official website](https://astro-ssr-spa.org/#features).

-  **Astro Single-Page Application Template**: This template leverages [Astro](https://astro.build/) for building a [single-page application](https://github.com/dansasser/astro-ssr-spa) with server-side rendering (SSR) capabilities, ensuring a fast and optimized user experience.


-  **Dynamic User Interfaces**: Integrated with [HTMX](https://htmx.org/), [Daisy UI](https://daisyui.com/), and [Tailwind CSS](https://tailwindcss.com/), this template allows for creating [dynamic, responsive user interfaces](https://github.com/dansasser/astro-ssr-spa) that enhance the visual appeal and functionality of your site.

-  **Comprehensive Session Management**: Features robust [session management](https://github.com/dansasser/astro-ssr-spa) implemented using [mongo-connect](https://www.npmjs.com/package/mongo-connect), suitable for managing user sessions in both local and community versions of MongoDB.

-  **E-Commerce Site Template with SSR Integration**: Combines Astro’s [SPA capabilities](https://github.com/dansasser/astro-ssr-spa) with [Express](https://expressjs.com/) and Node.js middleware for a seamless and efficient e-commerce site setup.

-  **Pre-Configured Development Environment**: Comes with a [pre-configured development environment](https://github.com/dansasser/astro-ssr-spa) that includes essential tools and scripts, making it easy to start building your project without extensive setup.

### **Use Cases**

This Astro template is ideal for various types of web projects, including:

-  **Build an E-Commerce Platform with Astro and MongoDB**: Create a fully-featured e-commerce site with product management, secure checkout, and user authentication, leveraging [Astro](https://astro.build)’s SSR and [MongoDB](https://www.mongodb.com/community)’s flexible database options.

-  **Create a Dynamic Blog Using HTMX and Daisy UI**: Develop a blog with interactive features and modern UI components, managing content through a headless CMS and ensuring a smooth user experience with [HTMX](https://htmx.org) and [Daisy UI](https://daisyui.com).

-  **Design a Professional Portfolio with Tailwind CSS**: Showcase your work and achievements with a responsive and stylish portfolio, utilizing [Tailwind CSS](https://tailwindcss.com) for customizable and attractive design elements.

-  **Integrate with Any Headless CMS**: Connect this template with any [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system) for flexible content management, allowing for easy updates and dynamic content delivery across various types of websites.

## 🛠️ Installation and Usage

To get started with the Astro SSR SPA Template, follow the instructions below or check out our [Getting Started Guide](https://astro-ssr-spa.org/#getting-started) on the official website.
For this project you can use either Bun or npm. Choose the method that best fits your environment:

1. **Initialize the Project**: Create a new project using the Astro CLI:

   -  With Bun:
      ```bash
      bun create-astro@latest -- --template dansasser/astro-ssr-spa
      ```
   -  With npm:
      ```bash
      npm create-astro@latest -- --template dansasser/astro-ssr-spa
      ```
      or
      ```bash
      npm i astro-ssr-spa
      cp -r node_modules/astro-ssr-spa/* .
      ```

2. **Install Dependencies**: Set up the project dependencies using your preferred package manager:

   -  With Bun:
      ```bash
      bun install
      ```
   -  With npm:
      ```bash
      npm install
      ```

3. **Configure Your Database**: Set up a MongoDB instance (local or cloud-based) and configure the necessary environment variables for session management.

4. **Run the Application**: Start the development environment with:
   -  With Bun:
      ```bash
      bun dev:start
      ```
   -  With npm:
      ```bash
      npm run dev:start
      ```

## Custom Logger

Our Astro SSR SPA template includes a custom logger designed to handle traffic, error, and Content Security Policy (CSP) reports. This logger provides detailed and colorful output in both file logs and the server console, making it easier to track and debug issues. It uses the `preryConsole` library to add color and highlight different sections of the logs, enhancing readability and making it fully customizable.

### Features

-  **Traffic Logging:** Records incoming traffic details, including request paths, methods, and response statuses.
-  **Error Logging:** Captures error messages, stack traces, and context for troubleshooting.
-  **CSP Reports:** Logs Content Security Policy violations to help monitor and enforce security policies.
-  **Color Highlighting:** Utilizes `preryConsole` to apply color and formatting to various log sections, improving visual distinction.
-  **Customizable:** Allows customization of log colors and the information included in each log entry.

### Customization

You can customize the logger by modifying its configuration file or directly in the code. Here’s how:

-  **Colors:** Adjust the color scheme used for different log sections (e.g., traffic, errors, CSP reports) by changing the color codes in the logger configuration.
-  **Log Information:** Customize the information included in the logs by updating the logger's format settings. You can choose what details to log and their arrangement.

### Usage

To use the custom logger, simply integrate it into your application’s request handling and error management processes. Here's a basic example of how to set it up:
(This area need updated)

```javascript
const customLogger = require('./path/to/customLogger')

// Initialize the logger with custom settings
customLogger.initialize({
   colorScheme: {
      traffic: 'green',
      errors: 'red',
      csp: 'yellow'
   },
   logToFile: true,
   logToConsole: true
})

// Log a traffic entry
customLogger.logTraffic(req)

// Log an error
customLogger.logError(err)

// Log a CSP report
customLogger.logCSP(cspReport)
```

For more detailed customization options and usage instructions, refer to the [Custom Logger Documentation](./path/to/loggerDocumentation).

### Examples

-  **Traffic Log:**

   ```
   [2024-08-26 10:00:00] [INFO] [green] GET /api/data - 200 OK
   ```

-  **Error Log:**

   ```
   [2024-08-26 10:05:00] [ERROR] [red] TypeError: Cannot read property 'foo' of undefined
       at /path/to/file.js:10:20
   ```

-  **CSP Report:**
   ```
   [2024-08-26 10:10:00] [CSP] [yellow] Blocked script-src violation on https://example.com
   ```

## Concurrently and Wait-On with Microsoft DevTunnel

**`concurrently`** and **`wait-on`** are powerful tools used together to manage and synchronize multiple processes in your development workflow.

-  **`concurrently`**: This tool allows you to run multiple commands simultaneously in a single terminal. In your setup, it is used to run both the server and the DevTunnel setup concurrently, ensuring that both processes are started and managed together.

-  **`wait-on`**: This tool is used to wait for specific resources or conditions before proceeding with other tasks. In your setup, `wait-on` monitors a configuration file (`waiton.json`) to ensure that the server is up and running before starting the DevTunnel. This ensures that the tunnel is only established when the server is ready, avoiding potential connection issues.

**Run it**:

-  With Bun:
   ```bash
   bun serve:tunnel
   ```
-  With npm:
   ```bash
   npm serve:tunnel
   ```

Here’s how it works in your workflow:

1. **Start the Server and DevTunnel**:

   -  **`concurrently`** runs both the server and the DevTunnel commands at the same time.

   -  **`wait-on`** is used to monitor the server's readiness, based on the configuration in `waiton.json`.

2. **Server Initialization**:

   -  **`wait-on`** checks if the server is up by looking for a specific condition defined in `waiton.json`.

3. **DevTunnel Setup**:
   -  Once the server is confirmed to be running, **`concurrently`** continues with the DevTunnel setup, exposing your local server to the internet through a secure, temporary URL.

This setup ensures a smooth development experience by coordinating server startup and tunnel creation, making it easier to test and share your local application.

## Microsoft DevTunnel

Microsoft DevTunnel provides a secure, customizable tunnel to your local development environment. It’s particularly useful for exposing your local server to the internet, which is essential for tasks like remote testing and integration.

For a detailed guide on installing and using Microsoft DevTunnel, you can refer to the official [Microsoft DevTunnel documentation](https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/).

Note: The dev tunnel listens for the server to start by way of a waiton.json configuration and then runs concurrently afterwards.

1. **Install DevTunnel**:

   ```bash
   npm install -g devtunnel
   ```

2. **Start DevTunnel**: Expose a local port (e.g., port 3000):

   ```bash
   devtunnel host 3000
   ```

3. **Access the Tunnel**: DevTunnel will generate a URL to access your local server from anywhere.

For detailed instructions and additional usage options, visit the [Microsoft DevTunnel documentation](https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/).

## 📁 Project Structure

Inside of your project, you'll see the following folders and files:

```text
\
├── .astro\
│   ├── icon.d.ts
│   └── settings.json
├── config\
│   ├── devtunnel-fallback.js
│   └── waiton.json
├── db\
│   ├── pages.json
│   ├── social.json
│   └── test.js
├── .github\
│   └── FUNDING.yml
├── interfaces\
│   ├── PageData.ts
│   └── SocialData.ts
├── lib\
│   ├── img\
│   │   └── placeholder-image.png
│   ├── DateTime.js
│   ├── ExpressStarted.js
│   ├── HeaderPolicy.js
│   ├── helper.js
│   ├── Logger.js
│   └── PrettyConsole.js
├── log\
│   ├── csp.log
│   ├── error.log
│   └── traffic.log
├── public\
│   ├── assets\
│   │   ├── fonts\
│   │   │   ├── FasterOne-eKem.ttf
│   │   │   └── index.php
│   │   └── img\
│   │       ├── dan.png
│   │       └── picaLogo.png
│   ├── css\
│   │   ├── fav5\
│   │   │   ├── all.css
│   │   │   ├── all.min.css
│   │   │   ├── free.css
│   │   │   └── free.min.css
│   │   ├── all.css
│   │   ├── all.min.css
│   │   ├── flowbite.mini.css
│   │   └── svg-with-js.min.css
│   ├── js\
│   │   ├── all.min.js
│   │   ├── contact.js
│   │   └── main.js
│   └── favicon.svg
├── scripts\
│   └── image.converter.py
├── src\
│   ├── components\
│   │   ├── forms\
│   │   │   └── Basic.Form.astro
│   │   ├── inputs\
│   │   │   ├── buttons\
│   │   │   │   ├── BaseDaisyUI.astro
│   │   │   │   └── Theme_01.astro
│   │   │   ├── fileUpload\
│   │   │   │   └── Theme_01.astro
│   │   │   ├── selects\
│   │   │   │   └── Theme_01.astro
│   │   │   ├── text\
│   │   │   │   ├── Basic_01.astro
│   │   │   │   ├── Basic_03.astro
│   │   │   │   ├── Button.astro
│   │   │   │   ├── Error.astro
│   │   │   │   ├── Round.astro
│   │   │   │   ├── Success.astro
│   │   │   │   └── Theme_01.astro
│   │   │   ├── textarea\
│   │   │   │   └── Theme_01.astro
│   │   │   ├── Basic.astro
│   │   │   └── basic.input.jsx
│   │   ├── navigation\
│   │   │   ├── Drawer-Nav.astro
│   │   │   ├── Side-Child.astro
│   │   │   ├── Side-Nav.astro
│   │   │   ├── Side-No-Child.astro
│   │   │   └── Side-With-Child.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   └── Product.card.astro
│   ├── functions\
│   │   ├── checkReferer.ts
│   │   ├── ContryNames.ts
│   │   ├── GetData.ts
│   │   ├── GetSiteData.ts
│   │   ├── host-only-redirect.js
│   │   ├── IDGen.ts
│   │   ├── pageLoader.ts
│   │   ├── PostData.ts
│   │   └── URLFilter.ts
│   ├── icons\
│   │   └── *.svg
│   ├── layouts\
│   │   └── Layout.astro
│   ├── middleware\
│   │   ├── auth.ts
│   │   ├── index.ts
│   │   └── validate.ts
│   ├── pages\
│   │   ├── content\
│   │   │   ├── about.astro
│   │   │   ├── apparel.astro
│   │   │   ├── contact.astro
│   │   │   ├── home.astro
│   │   │   └── products.astro
│   │   ├── icons.astro
│   │   └── index.astro
│   ├── utils\
│   │   ├── fa-icons.json
│   │   ├── fa-v5-icons.json
│   │   └── icons.json
│   └── env.d.ts
├── styles\
│   ├── all.css
│   ├── all-min.css
│   ├── contactCustom.css
│   ├── flowbite.mini.css
│   ├── global.css
│   └── svg-with-js.min.css
├── types\
│   └── SiteData.ts
├── .vscode\
│   ├── extensions.json
│   └── settings.json
├── astro.config.mjs
├── .env.example
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── .prettierrc
├── README.md
├── server.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

**Astro Project Structure**

This section provides an overview of the project's directory structure and key components, organized to help you quickly build and scale your e-commerce site. Understanding this structure will enable you to navigate and utilize the [Astro SSR SPA](https://github.com/dansasser/astro-ssr-spa) template effectively. Here’s a breakdown of the key directories and their roles:

#### Root Directory

-  **`src/`**: The primary directory for your [Astro project code](https://astro.build/), including pages, components, and styles. Astro looks for `.astro` or `.md` files here to determine routes and page content.

   -  **`src/components/`**: Contains reusable UI components compatible with **Astro** and other frameworks like React, Vue, Svelte, or Preact.
   -  **`src/layouts/`**: Defines the layout structure for your pages, including headers, footers, and other consistent elements.
   -  **`src/pages/`**: Houses your site’s pages. **Astro** generates routes based on the filenames of `.astro` or `.md` files in this directory.
   -  **`index.astro`**
   -  **Description:** The `index.astro` file is the main container for the single-page application (SPA). It sets up the primary layout and manages routing within the application.
   -  **Usage:** This file initializes the SPA structure and dynamically renders content based on user interactions.

   ```astro
   <!-- Example content for index.astro -->
   <html>
     <head>
       <title>Astro SSR SPA</title>
     </head>
     <body>
       <!-- Main layout and dynamic content will be loaded here -->
       <div id="app">
         <!-- HTMX will load content into this container -->
       </div>
     </body>
   </html>
   ```

-  **`content/`**

   -  **Description:** The `content` directory stores all the pages for the application. HTMX is used to dynamically load these pages into the SPA.
   -  **Usage:** Place your individual page files in this directory. HTMX will handle the dynamic loading of these pages based on user interactions.

   ```html
   <!-- Example page in content directory -->
   <!-- content/home.astro -->
   <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
   </div>
   ```

#### Additional Directories

-  **`lib/`**

   -  **Description:** Contains essential [server functions](https://github.com/dansasser/astro-ssr-spa) used by the `server.mjs` entry point, enabling server-side functionality and integration.
   -  **Usage:** Place server-side functions and utilities here that are used across different parts of the application.

-  **`types/` and `interfaces/`**

   -  **Description:** These directories are used to store [TypeScript types](https://www.typescriptlang.org/docs/) and interfaces.
   -  **Usage:** Keep TypeScript definitions outside the `src` directory for enhanced security and better code organization.

-  **`public/`**

   -  **Description:** The `public` directory holds static assets that do not need processing or compilation. Files placed here, such as images, fonts, and other media, are served directly to the browser.
   -  **Usage:** Use this directory for any static files that should be accessible via URL, like logos, background images, and downloadable files. These assets are referenced in your project using relative paths.

-  **`styles/`**
   -  **Description:** The `styles` directory contains global CSS files and configuration for utility-first CSS frameworks like Tailwind CSS.
   -  **Usage:** Store your global styles, CSS variables, and Tailwind configurations in this directory to ensure a consistent design language across the entire site. This directory is crucial for maintaining a cohesive look and feel throughout your application.

#### Configuration Files

-  **`package.json`**

   -  **Description:** Contains metadata about the project and dependencies.
   -  **Usage:** Manage project dependencies and scripts from this file.

-  **`astro.config.mjs`**
   -  **Description:** Configuration file for Astro settings.
   -  **Usage:** Customize Astro's build and development settings.

**Why This Structure Matters**

The organization provided by **Astro** ensures modularity and maintainability, allowing for easy updates and extensions. Each directory serves a specific purpose, helping you manage different aspects of your project efficiently.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           | npm Command               | bun Command           |
| :--------------------- | :----------------------------------------------- | :------------------------ | :-------------------- |
| Install dependencies   | Installs dependencies                            | `npm install`             | `bun install`         |
| Start dev server       | Starts the Astro development server              | `npm run dev`             | `bun dev`             |
| Build and start server | Builds the project and starts the server         | `npm run dev:start`       | `bun dev:start`       |
| Start server only      | Starts the server without rebuilding             | `npm run start:server`    | `bun start:server`    |
| Serve with tunnel      | Starts the server and dev tunnel simultaneously  | `npm run serve:tunnel`    | `bun serve:tunnel`    |
| Build for production   | Build your production site to `./dist/`          | `npm run build`           | `bun build`           |
| Preview your build     | Preview your build locally, before deploying     | `npm run preview`         | `bun preview`         |
| Run Astro CLI commands | Run CLI commands like `astro add`, `astro check` | `npm run astro ...`       | `bun astro ...`       |
| Get Astro CLI help     | Get help using the Astro CLI                     | `npm run astro -- --help` | `bun astro -- --help` |

## 👀 Why Choose This Template?

-  **Optimized for Performance**: Benefit from Astro’s efficient rendering capabilities and fast load times.

-  **Enhanced Interactivity**: Utilize HTMX for building highly interactive web applications with minimal client-side JavaScript.

-  **Flexible Design Options**: Easily customize your application with Tailwind CSS and Daisy UI.

-  **Secure and Scalable**: Manage sessions securely and scale your app with flexible database options.

Explore the **Astro SSR SPA with HTMX, Daisy UI, Tailwind CSS, and MongoDB Template by DTS** to build modern, high-performance web applications. Get started today and harness the best tools in web development to create exceptional user experiences.

---

## Useful Links

-  [Astro’s Community Forum](https://astro.build/community) – Connect with other Astro users and seek community support.
-  [Tailwind CSS Play](https://play.tailwindcss.com/) – Experiment with Tailwind CSS directly in your browser.

## Resources

-  [Astro Documentation](https://astro.build/docs) – Comprehensive guide to getting started with Astro, including tutorials and API references.
-  [HTMX Documentation](https://htmx.org/docs/) – Official documentation for learning and using HTMX in your projects.
-  [Daisy UI Documentation](https://daisyui.com/docs/) – Reference for utilizing Daisy UI components in your UI designs.
-  [Tailwind CSS Documentation](https://tailwindcss.com/docs) – Detailed guide to using Tailwind CSS for building responsive designs.
-  [MongoDB Community Edition](https://www.mongodb.com/try/download/community) – Official page to download and install the MongoDB Community Edition for local development.
-  [Dev.to](https://dev.to/dansasser/supercharge-your-e-commerce-site-with-astro-ssr-spa-template-1578) – a link to our current article about Astro SSR SPA at dev.to
-  [NPM](https://www.npmjs.com/package/astro-ssr-spa) - a package via NPM
-  [medium.com](https://medium.com/@sasserenterprises/supercharge-your-e-commerce-site-with-astro-ssr-spa-template-1965241bda3e) – a link to our current article about Astro SSR SPA at medium.to
-  [dansasser.me](https://dansasser.me/posts/getting-started-with-astro-ssr-spa-for-e-commerce-with-htmx/) - the canonical version of the article
---

## Contributing

Contributions are welcome! For guidelines and information, please visit the [Contributing section](https://astro-ssr-spa.org/#contributing) on our official website.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

For more details, check out our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Contact

For more information or support, visit our [official website](https://astro-ssr-spa.org) or contact us directly at [contact@gorombo.com](mailto:contact@gorombo.com).

## License

This project is licensed under the Apache License 2.0 License. See the [LICENSE](LICENSE) file for details.
