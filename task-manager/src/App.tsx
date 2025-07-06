import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FilterButtons from './components/FilterButtons'

export interface Task {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export type FilterType = 'all' | 'active' | 'completed'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>('all')

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }))
        setTasks(parsedTasks)
      } catch (error) {
        console.error('Error parsing saved tasks:', error)
      }
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeTasks = tasks.filter(task => !task.completed).length
  const completedTasks = tasks.filter(task => task.completed).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
            <p className="text-gray-600">Stay organized and productive</p>
          </div>

          {/* Task Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <TaskForm onAddTask={addTask} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-gray-800">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-yellow-600">{activeTasks}</div>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <FilterButtons 
              currentFilter={filter} 
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
              hasCompletedTasks={completedTasks > 0}
            />
          </div>

          {/* Task List */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <TaskList 
              tasks={filteredTasks} 
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
