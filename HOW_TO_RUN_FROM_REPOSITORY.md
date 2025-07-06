# How to Run Task Manager Project from Git Repository

## Repository Information
**GitHub Repository**: `https://github.com/ranit122/demo2`

## Prerequisites
Before you start, make sure you have the following installed on your system:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

## Step-by-Step Instructions

### 1. Clone the Repository
Open your terminal/command prompt and run:

```bash
git clone https://github.com/ranit122/demo2.git
```

### 2. Navigate to the Project Directory
```bash
cd demo2
```

### 3. Go to the Task Manager App Directory
```bash
cd task-manager
```

### 4. Install Dependencies
Install all required npm packages:
```bash
npm install
```

This will install:
- React 19.1.0
- TypeScript
- Tailwind CSS v4
- Vite
- ESLint and other development tools

### 5. Start the Development Server
```bash
npm run dev
```

### 6. Open in Browser
Once the server starts, you'll see output like:
```
  VITE v7.0.0  ready in 500ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to: **http://localhost:5173**

## Available Scripts

Once you're in the `task-manager` directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Troubleshooting

### If you encounter permission errors:
```bash
# Clear npm cache
npm cache clean --force

# Install with --legacy-peer-deps if needed
npm install --legacy-peer-deps
```

### If port 5173 is already in use:
```bash
# Kill any process using port 5173
npx kill-port 5173

# Or run on a different port
npm run dev -- --port 3000
```

### If you see module not found errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Project Structure After Cloning
```
demo2/
├── task-manager/           # Main application directory
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   ├── package.json        # Dependencies and scripts
│   └── README.md           # Project documentation
└── README.md               # Repository overview
```

## Features You Can Test
After running the app, you can:
- ✅ Add new tasks using the input field
- ✅ Mark tasks as complete by clicking the circle
- ✅ Delete tasks using the trash icon
- ✅ Filter tasks (All, Active, Completed)
- ✅ Clear all completed tasks
- ✅ See task statistics in real-time
- ✅ Your tasks persist in local storage

## Quick Start Summary
```bash
# One-liner to get started
git clone https://github.com/ranit122/demo2.git && cd demo2/task-manager && npm install && npm run dev
```

## Development Environment
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Code Quality**: ESLint
- **Browser Support**: Modern browsers (ES2020+)

## Next Steps
- The app will automatically save your tasks to browser's local storage
- Try adding some tasks and refreshing the page to see persistence in action
- Check out the code in the `src/` directory to understand the implementation
- Modify the code and see hot reload in action during development

Happy coding! 🚀