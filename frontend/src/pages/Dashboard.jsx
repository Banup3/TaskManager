import { useState, useEffect } from 'react';
import { useTask } from '../context/TaskContext';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { Plus, Search, Filter } from 'lucide-react';

const Dashboard = () => {
  const { tasks, stats, loading, fetchTasks, fetchStats, createTask, updateTask, deleteTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    search: '',
    sortBy: 'createdAt',
    order: 'desc',
  });

  useEffect(() => {
    fetchTasks(filters);
    fetchStats();
  }, [fetchTasks, fetchStats, filters]);

  const handleCreateTask = async (taskData) => {
    const result = await createTask(taskData);
    return result;
  };

  const handleUpdateTask = async (taskData) => {
    const result = await updateTask(selectedTask._id, taskData);
    return result;
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(id);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      status: '',
      priority: '',
      search: '',
      sortBy: 'createdAt',
      order: 'desc',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <div className="card bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-medium opacity-90">Total Tasks</h3>
            <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{stats.total}</p>
          </div>
          <div className="card bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-medium opacity-90">Pending</h3>
            <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{stats.pending}</p>
          </div>
          <div className="card bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-medium opacity-90">In Progress</h3>
            <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{stats['in-progress']}</p>
          </div>
          <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white p-4 sm:p-6">
            <h3 className="text-xs sm:text-sm font-medium opacity-90">Completed</h3>
            <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{stats.completed}</p>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="card mb-6 p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search and New Task Button Row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="input pl-10 text-sm sm:text-base"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary whitespace-nowrap flex items-center justify-center"
              >
                <Plus size={18} className="mr-2" />
                New Task
              </button>
            </div>

            {/* Filters Row */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="input flex-1 sm:flex-none sm:w-36 text-sm sm:text-base"
              >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>

              <select
                value={filters.priority}
                onChange={(e) => handleFilterChange('priority', e.target.value)}
                className="input flex-1 sm:flex-none sm:w-36 text-sm sm:text-base"
              >
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              <button
                onClick={clearFilters}
                className="btn btn-secondary whitespace-nowrap flex items-center justify-center"
              >
                <Filter size={16} className="mr-2" />
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : tasks.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-gray-500 text-lg">No tasks found</p>
            <p className="text-gray-400 text-sm mt-2">Create your first task to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </div>
        )}
      </main>

      <TaskModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={selectedTask ? handleUpdateTask : handleCreateTask}
        task={selectedTask}
      />
    </div>
  );
};

export default Dashboard;
