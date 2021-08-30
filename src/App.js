import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
    const title = 'Task Tracker';
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Text Hannah',
            day: 'Nov 12 at 1:35pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Call Matt',
            day: 'Nov 13 at 3:10pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Shopping',
            day: 'Nov 15 at 12:00pm',
            reminder: false,
        },
    ]);

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className='container'>
            <Header title={title} />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No Tasks to Show'
            )}
        </div>
    );
}

export default App;
