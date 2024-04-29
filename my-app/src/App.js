import React from 'react';
import ReactDOM from 'react-dom/client';
import User from "./сomponents/user"
import AddTask from './сomponents/addTask';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        userAnswer: ["", ""],
        users: [
            {
                id: 1,
                question: "2 + 2",
                answer1: 4,
                answer2: 5,
                answer3: 6,
                current: 4,
            },
            {
                id: 2,
                question: "Висит груша, но нельзя скушать",
                answer1: "лампочка",
                answer2: "боксерская груша",
                answer3: "Кабачок",
                current: "лампочка",
            },
         ]

    }
    this.solve = this.solve.bind(this)
    this.addTask = this.addTask.bind(this)

}
 
 render () { 
    return <div> 
        <h1>Загадки</h1>
        <h3>Инфо: Ответы показываютя автоматически</h3>
        <div className='container'>
        <div className="task"><User users={this.state} add={this.solve}/> </div>
        <div className='form'><AddTask add={this.addTask}/></div>

        </div>
     
      </div>
      
  }
  solve(id, value) {

    const updatedUserAnswer = [...this.state.userAnswer]; 
    updatedUserAnswer[id] = value
    this.setState({
      userAnswer: updatedUserAnswer
    })
  }




  addTask(data) {

   const id = this.state.users.length + 1
   this.setState({users: [...this.state.users, {id, ...data}]})
   this.setState({userAnswer: [...this.state.userAnswer, ""]})
  
  }

}
export default App