// frontend/src/components/TaskList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import AddTaskForm from './AddTaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTasks(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch tasks: ' + err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks([newTask, ...tasks]);
    };

    const handleTaskUpdated = (updatedTask) => {
        setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
    };

    const handleTaskDeleted = (deletedTaskId) => {
        setTasks(tasks.filter((task) => task._id !== deletedTaskId));
    };

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div>
            <AddTaskForm onTaskAdded={handleTaskAdded} />
            {tasks.length === 0 ? (
                <p className="text-gray-700">No tasks available. Add a new task!</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem
                        key={task._id}
                        task={task}
                        onTaskUpdated={handleTaskUpdated}
                        onTaskDeleted={handleTaskDeleted}
                    />
                ))
            )}
        </div>
    );
};

export default TaskList;
