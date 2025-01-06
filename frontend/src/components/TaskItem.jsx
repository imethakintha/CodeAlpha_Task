import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

TaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    priority: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    isCompleted: PropTypes.bool.isRequired
  }).isRequired,
  onTaskUpdated: PropTypes.func.isRequired,
  onTaskDeleted: PropTypes.func.isRequired,
};

// If you have other props, add their PropTypes similarly.


const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description || '');
    const [editedPriority, setEditedPriority] = useState(task.priority);
    const [editedDueDate, setEditedDueDate] = useState(task.dueDate ? task.dueDate.split('T')[0] : '');

    const handleToggleComplete = async () => {
        try {
            const updatedTask = { ...task, isCompleted: !task.isCompleted };
            const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, updatedTask);
            onTaskUpdated(response.data);
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
                onTaskDeleted(task._id);
            } catch (error) {
                console.error('Error deleting task:', error);
                alert('Failed to delete task');
            }
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedTitle(task.title);
        setEditedDescription(task.description || '');
        setEditedPriority(task.priority);
        setEditedDueDate(task.dueDate ? task.dueDate.split('T')[0] : '');
    };

    const handleSaveEdit = async () => {
        if (!editedTitle.trim()) {
            alert('Title is required');
            return;
        }

        const updatedTask = {
            title: editedTitle,
            description: editedDescription,
            priority: editedPriority,
            dueDate: editedDueDate,
            isCompleted: task.isCompleted,
        };

        try {
            const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, updatedTask);
            onTaskUpdated(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task');
        }
    };

    return (
        <div className={`p-4 rounded shadow mb-4 flex flex-col ${task.isCompleted ? 'bg-green-100' : 'bg-white'}`}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="w-full mt-1 p-2 border rounded mb-2"
                        required
                    />
                    <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="w-full mt-1 p-2 border rounded mb-2"
                    ></textarea>
                    <div className="flex space-x-4 mb-2">
                        <select
                            value={editedPriority}
                            onChange={(e) => setEditedPriority(e.target.value)}
                            className="w-1/2 p-2 border rounded"
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        <input
                            type="date"
                            value={editedDueDate}
                            onChange={(e) => setEditedDueDate(e.target.value)}
                            className="w-1/2 p-2 border rounded"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleSaveEdit}
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelEdit}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-between items-center">
                        <h3 className={`text-lg font-semibold ${task.isCompleted ? 'line-through' : ''}`}>
                            {task.title}
                        </h3>
                        <div className="flex space-x-2">
                            <button
                                onClick={handleEdit}
                                className="text-blue-500 hover:text-blue-700"
                                title="Edit Task"
                            >
                                ✏️
                            </button>
                            <button
                                onClick={handleDelete}
                                className="text-red-500 hover:text-red-700"
                                title="Delete Task"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                    {task.description && <p className="text-gray-700 mt-2">{task.description}</p>}
                    <div className="flex justify-between items-center mt-4">
                        <div>
                            <span className="font-semibold">Priority:</span> {task.priority}
                        </div>
                        {task.dueDate && (
                            <div>
                                <span className="font-semibold">Due:</span> {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={handleToggleComplete}
                            className="mr-2"
                        />
                        <span>Mark as {task.isCompleted ? 'Incomplete' : 'Complete'}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;
