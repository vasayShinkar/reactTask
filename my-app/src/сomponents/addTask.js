import React from 'react';


 class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: "",
      answer1: "",
      answer2: "",
      answer3: "",
      solve: "",      
    }
  }
   render() { 
     return (
        <form>
            <input placeholder='Сама загадка' onChange={(event) => this.setState({task: event.target.value})}/>
            <input placeholder='первый  ответ' onChange={(event) => this.setState({answer1: event.target.value})}/>
            <input placeholder='второй ответ' onChange={(event) => this.setState({answer2: event.target.value})}/>
            <input placeholder='третий ответ' onChange={(event) => this.setState({answer3: event.target.value})}/>
            <input placeholder="Верный ответ" onChange={(event) => this.setState({solve: event.target.value})}/>
            <button type="button" onClick={() => {this.props.add(
              {
                question: this.state.task,
                answer1: this.state.answer1,
                answer2: this.state.answer2,
                answer3: this.state.answer3,
                current: this.state.solve,
            }

          )}}>Добавить</button>
        </form>
     )
   }
 }


 export default AddTask