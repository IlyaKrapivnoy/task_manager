import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


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
    ])

  return (
    <div className="container">
        <Header title={title} />
        <Tasks tasks={tasks} />
    </div>
  )
}

export default App;
