const tasks = [
    {
        id: 1,
        text: 'Praying',
        day: 'Sep 3rd at 0:01am',
        remainder: true
    },
    {
        id: 2,
        text: 'Exercising',
        day: 'Sep 4th at 6:00am',
        remainder: true
    },
    {
        id: 3,
        text: 'It can be anything',
        day: 'Sep 24th at 2:30pm',
        remainder: false
    },
]

const Tasks = () => {
    return (
        <>
         {tasks.map((task) => (
         <h3>{task.text}</h3>
         ))}   
        </>
    )
}

export default Tasks
