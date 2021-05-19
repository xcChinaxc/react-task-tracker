import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Fed 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Shopping',
      day: 'Fed 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Jog',
      day: 'Fed 5th at 2:30pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks}  />
    </div>
  );
}

export default App;
