import type { FilterType } from '../App'

interface FilterButtonsProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  onClearCompleted: () => void
  hasCompletedTasks: boolean
}

export default function FilterButtons({ 
  currentFilter, 
  onFilterChange, 
  onClearCompleted, 
  hasCompletedTasks 
}: FilterButtonsProps) {
  const filterButtons: { key: FilterType; label: string; icon: string }[] = [
    { key: 'all', label: 'All Tasks', icon: '📋' },
    { key: 'active', label: 'Active', icon: '⚡' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ]

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      <div className="flex gap-2 flex-1">
        {filterButtons.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentFilter === filter.key
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{filter.icon}</span>
            <span className="text-sm">{filter.label}</span>
          </button>
        ))}
      </div>
      
      {hasCompletedTasks && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
        >
          Clear Completed
        </button>
      )}
    </div>
  )
}