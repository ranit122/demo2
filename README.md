# Task Manager App

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Add new tasks with a simple, clean interface
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks you no longer need
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Clear all completed tasks at once
- ✅ Automatic local storage persistence
- ✅ Task creation timestamps
- ✅ Responsive design that works on all devices
- ✅ Beautiful, modern UI with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Navigate to the task-manager directory:
```bash
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Usage

- **Add a task**: Type in the input field and press Enter or click "Add Task"
- **Complete a task**: Click the circle next to any task to mark it as complete
- **Delete a task**: Click the trash icon to remove a task
- **Filter tasks**: Use the filter buttons to view all tasks, only active tasks, or only completed tasks
- **Clear completed**: Click "Clear Completed" to remove all finished tasks

## Technology Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast development build tool
- **Local Storage** - Data persistence

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx      # Add new tasks
│   │   ├── TaskList.tsx      # Display task list
│   │   └── FilterButtons.tsx # Filter and clear controls
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.tsx              # App entry point
├── public/                   # Static assets
└── package.json              # Dependencies and scripts
```

## Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## License

This project is open source and available under the MIT License.
