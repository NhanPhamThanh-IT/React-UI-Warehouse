<div align="justify">

#  <div align="center">AestheticHub - A Collection of Prebuilt UI Components for React</div>

## Introduction
Welcome to AestheticHub, a modern frontend library designed to provide prebuilt UI components for React applications. This project aims to help developers speed up UI development by offering ready-to-use, customizable components built with the latest frontend technologies, including Tailwind CSS, Material-UI (MUI), Radix UI, and more.

With AestheticHub, you no longer need to start from scratch or spend hours designing and coding UI elements. Instead, you can focus on building amazing applications with a seamless user experience.

### Features
- 🏗 100+ Prebuilt Components – Ready-to-use components for various use cases.
- 🎨 Supports Multiple UI Libraries – Tailwind CSS, MUI, ShadCN, Radix UI, and more.
- ⚡ Optimized for Performance – Efficient, lightweight, and production-ready.
- 🌙 Dark Mode Support – Built-in dark mode compatibility.
- 🔌 Plug & Play – Import, customize, and integrate with ease.
- 🛠 Developer-Friendly – Well-structured codebase, easy to extend and modify.

### Technologies Used
- React 18 – Modern React with hooks and functional components.
- Tailwind CSS – A utility-first CSS framework for rapid UI development.
- Material-UI (MUI) / ShadCN – A powerful UI component library.
- Framer Motion – Smooth animations and transitions.
- React Icons / Lucide Icons – A collection of high-quality icons.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
# or
yarn install
```

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

### Previewing the Production Build

Preview the production build locally:

```bash
npm run serve
# or
yarn serve
```

## Project Structure

```plaintext
your-repo-name/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Assets like images, fonts, etc.
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── ...                 # Other files
├── .eslintrc.js            # ESLint configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` or `yarn dev`: Runs the app in the development mode.
- `npm run build` or `yarn build`: Builds the app for production.
- `npm run serve` or `yarn serve`: Serves the production build locally.
- `npm run lint` or `yarn lint`: Lints the codebase using ESLint.

## Features

- **Fast Refresh**: Instant feedback on edits with hot module replacement.
- **ESLint**: Linting for maintaining code quality.
- **Production Build**: Optimized build for production deployment.
- **Static Assets**: Easy management of static assets like images and fonts.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Babel/SWC**: JavaScript compilers for transforming code.

## Troubleshooting

### Common Issues

- **Port Already in Use**: If the development server fails to start because the port is already in use, you can specify a different port by running:
  ```bash
  npm run dev -- --port 3001
  # or
  yarn dev --port 3001
  ```

- **Module Not Found**: If you encounter a "module not found" error, make sure all dependencies are installed correctly by running:
  ```bash
  npm install
  # or
  yarn install
  ```

## Learn More

To learn more about React and Vite, check out the following resources:

- [React documentation](https://reactjs.org/)
- [Vite documentation](https://vitejs.dev/)
- [ESLint documentation](https://eslint.org/)

## Contributing

If you have suggestions for improving this project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [https://github.com/NhanPhamThanh-IT/UI-UX-Template?tab=MIT-1-ov-file](LICENSE) file for details.

</div>