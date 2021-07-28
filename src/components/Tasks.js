const tasks = [
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
]

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3>{ task.text }</h3>))}
        </>
    )
}

export default Tasks
