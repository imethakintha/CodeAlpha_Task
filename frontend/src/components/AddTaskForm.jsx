import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Title is required');
            return;
        }

        const newTask = {
            title,
            description,
            priority,
            dueDate,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/tasks', newTask);
            onTaskAdded(response.data);
            setTitle('');
            setDescription('');
            setPriority('Medium');
            setDueDate('');
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Failed to add task');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Title<span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full mt-1 p-2 border rounded"
                ></textarea>
            </div>
            <div className="mb-4 flex space-x-4">
                <div className="flex-1">
                    <label className="block text-gray-700">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                    >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700">Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full mt-1 p-2 border rounded"
                    />
                </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
};

AddTaskForm.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};

export default AddTaskForm;
