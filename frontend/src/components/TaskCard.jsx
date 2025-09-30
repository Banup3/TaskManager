import { Calendar, Edit2, Trash2 } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="card hover:shadow-md transition-all duration-200 active:scale-[0.98] p-4 sm:p-6">
      <div className="flex justify-between items-start mb-3 gap-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 break-words">{task.title}</h3>
        <div className="flex space-x-1 sm:space-x-2 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-2 sm:p-1.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors touch-manipulation"
            title="Edit task"
            aria-label="Edit task"
          >
            <Edit2 size={16} className="sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="p-2 sm:p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors touch-manipulation"
            title="Delete task"
            aria-label="Delete task"
          >
            <Trash2 size={16} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 break-words">{task.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {task.dueDate && (
        <div className="flex items-center text-xs sm:text-sm text-gray-500">
          <Calendar size={14} className="mr-1.5 flex-shrink-0" />
          <span>Due: {formatDate(task.dueDate)}</span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
