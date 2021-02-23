// import React from 'react'
import Task from './components/Tasks'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const name = 'seo'
  const x = true
  const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Doctor Appointment',
            day: 'Feb 15 at 9pm',
            remainder: true,
        },
        {
            id: 2,
            text: 'school HomeWork',
            day: 'Feb 16 at 7pm',
            remainder: false,
        },
        {
            id:3,
            text: 'buy car',
            day: 'Feb 16 at 7pm',
            remainder: true,
        }
    ])
  return (
    <div className="App">
      {/* <h1>HELLO FROM NEF</h1>
      <h2>dynamic data say hello to <b>{name}</b></h2>
      <h2>traneryopretors {x? 'yes':'No'}</h2> */}
      <Header />  
      <Task tasks={tasks}/>
      {/* <Header title={1}/> */}
      {/* 0.default above value and if need dynamin value then write with that header tittle='hee or any thing as per your requrments' */}
    </div>
  );
}
// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }
//it's for class only
export default App;
